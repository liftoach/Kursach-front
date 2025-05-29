import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import customFetch from "../axios/custom";
import { checkUserProfileFormData } from "../utils/checkUserProfileFormData";
import { setLoginStatus } from "../features/auth/authSlice";
import { store } from "../store";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  const logout = () => {
    toast.error("Вы успешно вышли из системы");
    localStorage.removeItem("user");
    store.dispatch(setLoginStatus(false));
    navigate("/login");
  };

  const fetchUser = async (userId: number | string) => {
    const response = await customFetch(`/users/${userId}`);
    setUser(response.data);
  };

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Получение данных из формы
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    // Проверка валидности данных формы
    if (!checkUserProfileFormData(data)) return;
    const userId = JSON.parse(localStorage.getItem("user") || "{}").id;
    if (userId) {
      try {
        await customFetch.put(`/users/${userId}`, data);
      } catch (e) {
        toast.error("Не удалось обновить пользователя");
        return;
      }
      toast.success("Пользователь успешно обновлен");
    } else {
      toast.error("Пожалуйста, войдите в систему для доступа к этой странице");
      navigate("/login");
    }
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user") || "{}").id;
    if (!userId) {
      toast.error("Пожалуйста, войдите в систему для доступа к этой странице");
      navigate("/login");
    } else {
      fetchUser(userId);
    }
  }, [navigate]);

  return (
    <div className="max-w-screen-lg mx-auto mt-24 px-5">
      <h1 className="text-3xl font-bold mb-8">Ваш профиль</h1>
      <form className="flex flex-col gap-6" onSubmit={updateUser}>
        <div className="flex flex-col gap-1">
          <label htmlFor="firstname">Имя</label>
          <input
            type="text"
            className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
            placeholder="Введите имя"
            id="firstname"
            name="name"
            defaultValue={user?.name}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastname">Фамилия</label>
          <input
            type="text"
            className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
            placeholder="Введите фамилию"
            id="lastname"
            name="lastname"
            defaultValue={user?.lastname}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
            placeholder="Введите адрес электронной почты"
            id="email"
            name="email"
            defaultValue={user?.email}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
            placeholder="Введите пароль"
            id="password"
            name="password"
            defaultValue={user?.password}
          />
        </div>
        <Button type="submit" text="Обновить профиль" mode="brown" />
        <Button onClick={logout} text="Выйти" mode="white" />
      </form>
    </div>
  );
};

export default UserProfile;
