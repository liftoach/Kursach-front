import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/formatCategoryName";

// Загружаем все изображения из assets
const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
});

const ProductItem = ({
  id,
  image,
  title,
  category,
  price,
  stock,
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  stock: number;
}) => {
  // Находим путь к нужному изображению
  const imageUrl = Object.entries(images).find(([path]) =>
    path.endsWith(`/assets/${image}`)
  )?.[1] as string | undefined;

  return (
    <div className="w-[400px] flex flex-col gap-2 justify-center max-md:w-[300px]">
      <Link
        to={`/product/${id}`}
        className="w-full h-[300px] max-md:h-[200px] overflow-hidden"
      >
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        ) : (
          <p>Изображение не найдено</p>
        )}
      </Link>

      <Link
        to={`/product/${id}`}
        className="text-black text-center text-3xl tracking-[1.02px] max-md:text-2xl"
      >
        <h2>{title}</h2>
      </Link>

      <p className="text-secondaryBrown text-lg tracking-wide text-center max-md:text-base">
        {formatCategoryName(category)}
      </p>

      <p className="text-black text-2xl text-center font-bold max-md:text-xl">
        ${price}
      </p>

      <p
        className={`text-center text-lg max-md:text-base ${
          stock > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {stock > 0 ? `В наличии: ${stock} шт.` : "Нет в наличии"}
      </p>

      <div className="w-full flex flex-col gap-1">
        <Link
          to={`/product/${id}`}
          className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          Посмотреть товар
        </Link>
        <Link
          to={`/product/${id}`}
          className="bg-white text-black text-center text-xl border border-[rgba(0, 0, 0, 0.40)] font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          Узнать больше
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
