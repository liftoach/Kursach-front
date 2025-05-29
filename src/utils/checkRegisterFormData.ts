import toast from "react-hot-toast";

export const checkRegisterFormData = (data: {
  [k: string]: FormDataEntryValue;
}): boolean => {
  if (data?.name === "") {
    toast.error("Пожалуйста, введите имя");
    return false;
  } else if (data?.lastname === "") {
    toast.error("Пожалуйста, введите фамилию");
    return false;
  } else if (data?.email === "") {
    toast.error("Пожалуйста, введите электронную почту");
    return false;
  } else if (data?.password === "") {
    toast.error("Пожалуйста, введите пароль");
    return false;
  } else if (data?.password !== data?.confirmPassword) {
    toast.error("Пароли не совпадают");
    return false;
  }
  return true;
};
