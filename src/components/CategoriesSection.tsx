import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        Наши категории
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Камеры"
          image="c1.jpg"
          link="Камеры"
        />
        <CategoryItem
          categoryTitle="Luxury Collection"
          image="phone.jpg"
          link="Телефоны"
        />
        <CategoryItem
          categoryTitle="аудиосистемы"
          image="phone.jpg"
          link="Аудиосистемы"
        />
        <CategoryItem
          categoryTitle="Компьютеры"
          image="n.jph"
          link="Компьютеры"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;
