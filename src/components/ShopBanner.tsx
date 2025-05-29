import { formatCategoryName } from "../utils/formatCategoryName";

const ShopBanner = ({ category }: { category: string }) => {
  return (
    <div className="bg-secondaryBrown text-white py-10 flex justify-center items-center mx-auto my-10 rounded-lg shadow-lg w-full max-w-screen-xl">
      <h2 className="text-3xl max-sm:text-2xl">
        {category ? formatCategoryName(category) : "Каталог"}
      </h2>
    </div>
  );
};
export default ShopBanner;
