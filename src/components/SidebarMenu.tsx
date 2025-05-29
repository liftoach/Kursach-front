import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { setLoginStatus } from "../features/auth/authSlice";
import { store } from "../store";

const SidebarMenu = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (prev: boolean) => void;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { loginStatus } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const logout = () => {
    toast.error("Logged out successfully");
    localStorage.removeItem("user");
    store.dispatch(setLoginStatus(false));
    navigate("/login");
  };

  useEffect(() => {
    // Запускаем анимацию при открытии сайдбара
    if (isSidebarOpen) {
      setIsAnimating(true);
    } else {
      // Устанавливаем флаг анимации в false, только когда анимация закрытия завершена
      const timer = setTimeout(() => setIsAnimating(false), 500); // Время на завершение анимации
      return () => clearTimeout(timer);
    }
  }, [isSidebarOpen]); // useEffect зависит от состояния isSidebarOpen

  return (
    <>
      {(isSidebarOpen || isAnimating) && (
        <div
          className={
            isSidebarOpen
              ? "fixed top-0 left-0 w-64 z-50 h-full transition-transform duration-500 ease-in-out bg-white shadow-2xl rounded-lg transform border-r border-black translate-x-0"
              : "fixed top-0 left-0 w-64 z-50 h-full transition-transform duration-500 ease-in-out bg-white shadow-2xl rounded-lg transform border-r border-black -translate-x-full"
          }
        >
          <div className="flex justify-end mr-3 mt-3">
            <HiXMark
              className="text-3xl cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-300"
              onClick={() => setIsSidebarOpen(false)} // Закрытие сайдбара по клику
            />
          </div>
            <div className="flex justify-center items-center mt-4">
  <Link
    to="/"
    className="text-4xl font-light tracking-[1.08px] text-gray-800 hover:text-primaryBrown max-sm:text-3xl max-[400px]:text-2xl transition-colors duration-300 ml-4"
  >
    Аренда техники
  </Link>
</div>
          <div className="flex flex-col items-center gap-2 mt-8">
            <Link
              to="/"
              className="py-3 px-4 w-full text-center border-y border-secondaryBrown rounded-lg hover:bg-secondaryBrown hover:text-white transition-colors duration-300"
            >
              Главная
            </Link>
            <Link
              to="/shop"
              className="py-3 px-4 w-full text-center border-y border-secondaryBrown rounded-lg hover:bg-secondaryBrown hover:text-white transition-colors duration-300"
            >
              Каталог
            </Link>
            <Link
              to="/search"
              className="py-3 px-4 w-full text-center border-y border-secondaryBrown rounded-lg hover:bg-secondaryBrown hover:text-white transition-colors duration-300"
            >
              Поиск
            </Link>
            {loginStatus ? (
              <>
                <button
                  onClick={logout}
                  className="py-3 px-4 w-full text-center border-y border-secondaryBrown rounded-lg hover:bg-secondaryBrown hover:text-white transition-colors duration-300"
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="py-3 px-4 w-full text-center border-y border-secondaryBrown rounded-lg hover:bg-secondaryBrown hover:text-white transition-colors duration-300"
                >
                  Войти в аккаунт
                </Link>
                <Link
                  to="/register"
                  className="py-3 px-4 w-full text-center border-y border-secondaryBrown rounded-lg hover:bg-secondaryBrown hover:text-white transition-colors duration-300"
                >
                  Зарегестрироваться
                </Link>
              </>
            )}
            <Link
              to="/cart"
              className="py-3 px-4 w-full text-center border-y border-secondaryBrown rounded-lg hover:bg-secondaryBrown hover:text-white transition-colors duration-300"
            >
              Корзина
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarMenu;
