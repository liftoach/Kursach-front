import toast from "react-hot-toast";

export const checkUserProfileFormData = (data: {
  [k: string]: FormDataEntryValue;
}) => {
  const { name, lastname, email, password } = data;
  if (
    name &&
    lastname &&
    email &&
    password &&
    name === "" &&
    lastname === "" &&
    email === "" &&
    password === ""
  ) {
    toast.error("Пожалуйста, заполните все поля");
    return false;
  }
  return true;
};
