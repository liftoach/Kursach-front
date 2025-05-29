import {
  HiCheck as CheckIcon,
  HiXMark as XMarkIcon,
} from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import {
  removeProductFromTheCart,
  updateProductQuantity,
} from "../features/cart/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const { productsInCart,  } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const subtotal1 = productsInCart.reduce((total, product) => {
  const pricePerDay = product.pricePerDay;
  const quantity = product.quantity;

  if (isNaN(pricePerDay) || isNaN(quantity)) {
    console.error('Invalid product data:', product);
    return total;
  }

  return total + pricePerDay * quantity;
}, 0);
  
console.log('Subtotal:', subtotal1);

  // Рассчитываем стоимость доставки (5% от суммы или фиксированная стоимость)
  const shippingCost = subtotal1 > 0 ? 5.0 : 0;

  // Рассчитываем итоговую сумму
  const total = subtotal1 + shippingCost;

  return (
    <div className="bg-white mx-auto max-w-screen-2xl px-5 max-[400px]:px-3">
      <div className="pb-24 pt-16">
        <h1 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
          Корзина аренды
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Оборудование в вашей корзине
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {productsInCart.map((product) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={`/src/assets/${product.image}`}
                      alt={product.title}
                      className="h-24 w-24 object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link
                              to={`/product/${product.id}`}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.title}
                            </Link>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ${product.pricePerDay}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor="quantity mr-5">Количество (дней аренды): </label>
                        <input
                          type="number"
                          id="quantity"
                          className="w-16 h-7 indent-1 bg-white border"
                          value={product?.quantity}
                          onChange={(e) => {
                            dispatch(
                              updateProductQuantity({
                                id: product?.id,
                                quantity: parseInt(e.target.value),
                              })
                            );
                          }}
                        />

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => {
                              dispatch(
                                removeProductFromTheCart({ id: product?.id })
                              );
                              toast.error("Товар удалён из корзины");
                            }}
                          >
                            <span className="sr-only">Удалить</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product?.stock ? (
                        <CheckIcon
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <XMarkIcon
                          className="h-5 w-5 flex-shrink-0 text-red-600"
                          aria-hidden="true"
                        />
                      )}
                      <span>{product?.stock ? "Доступно" : "Нет в наличии"}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Итог аренды
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Промежуточный итог</dt>
                <dd className="text-sm font-medium text-gray-900">${subtotal1}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Стоимость доставки</span>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${shippingCost}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Итоговая сумма</dt>
                <dd className="text-base font-medium text-gray-900">${total}</dd>
              </div>
            </dl>

            {productsInCart.length > 0 && (
              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
                >
                  Оформить аренду
                </Link>
              </div>
            )}
          </section>
        </form>
      </div>
    </div>
  );
};
export default Cart;
