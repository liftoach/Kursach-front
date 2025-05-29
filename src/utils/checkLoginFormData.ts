import toast from "react-hot-toast";

export const checkLoginFormData = (data: {
  [k: string]: FormDataEntryValue;
}) => {
    if(data?.email === "" || data?.password === "") {
        toast.error("Пожалуйста, заполните все поля");
        return false;
    }
    return true;
};
