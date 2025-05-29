import toast from "react-hot-toast";

export const checkCheckoutFormData = (checkoutData: {
  data: {
    [k: string]: FormDataEntryValue;
  };
  products: ProductInCart[];
  subtotal: number;
}) => {
  if (checkoutData.data?.address === "") {
    toast.error("Адрес обязателен для заполнения");
    return false;
  } else if (checkoutData.data?.apartment === "") {
    toast.error("Квартира обязательна для заполнения");
    return false;
  } else if (checkoutData.data?.cardNumber === "") {
    toast.error("Номер карты обязателен для заполнения");
    return false;
  } else if (checkoutData.data?.city === "") {
    toast.error("Город обязателен для заполнения");
    return false;
  } else if (checkoutData.data?.company === "") {
    toast.error("Компания обязательна для заполнения");
    return false;
  } else if (checkoutData.data?.country === "") {
    toast.error("Страна обязательна для заполнения");
    return false;
  } else if (checkoutData.data?.cvc === "") {
    toast.error("CVC обязателен для заполнения");
    return false;
  } else if (checkoutData.data?.emailAddress === "") {
    toast.error("Email обязателен для заполнения");
    return false;
  } else if (checkoutData.data?.expirationDate === "") {
    toast.error("Срок действия карты обязателен для заполнения");
    return false;
  } else if (checkoutData.data?.firstName === "") {
    toast.error("Имя обязательно для заполнения");
    return false;
  } else if (checkoutData.data?.lastName === "") {
    toast.error("Фамилия обязательна для заполнения");
    return false;
  } else if (checkoutData.data?.nameOnCard === "") {
    toast.error("Имя на карте обязательно для заполнения");
    return false;
  } else if (checkoutData.data?.paymentType === "") {
    toast.error("Тип оплаты обязателен для заполнения");
    return false;
  } else if (checkoutData.data?.phone === "") {
    toast.error("Телефон обязателен для заполнения");
    return false;
  } else if (checkoutData.data?.postalCode === "") {
    toast.error("Почтовый индекс обязателен для заполнения");
    return false;
  } else if (checkoutData.data?.region === "") {
    toast.error("Регион обязателен для заполнения");
    return false;
  } else if (checkoutData?.products.length === 0) {
    toast.error("Необходимо выбрать хотя бы один товар");
    return false;
  } else if (checkoutData?.subtotal === 0) {
    toast.error("Сумма заказа не может быть нулевой");
    return false;
  }

  return true;
};
