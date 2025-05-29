import { useAppSelector } from "../hooks";

const ShopFilterAndSort = ({
  sortCriteria,
  setSortCriteria,
}: {
  sortCriteria: string;
  setSortCriteria: (value: string) => void;
}) => {
  const { showingProducts, totalProducts } = useAppSelector(state => state.shop)
  return (
    <div className="flex justify-between items-center px-5 max-sm:flex-col max-sm:gap-5">
      <p className="text-lg">Отображается 1–{ showingProducts } из { totalProducts } товаров</p>
      <div className="flex gap-3 items-center">
        <p>Сортируется:</p>
        <div className="relative">
          <select
            className="border border-[rgba(0,0,0,0.40)] px-2 py-1"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSortCriteria(e.target.value)
            }
            value={sortCriteria}
          >
            <option value="default">По релевантности</option>
            <option value="popularity">По популярности</option>
            <option value="price-asc">По цене: От дешевого к дорогому</option>
            <option value="price-desc">По цене: От дорогого к дешевему</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default ShopFilterAndSort;
