import { useState, useEffect } from "react";
import {
  Button,
  ProductGrid,
  ProductGridWrapper,
  ShowingSearchPagination,
} from "../components";
import { Form, useSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Состояние текущей страницы, инициализируем из URL-параметра
  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(searchParams.get("page") || "1")
  );

  // Обновляем currentPage, если параметр в URL изменился извне (например, назад/вперед)
  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  }, [searchParams, currentPage]);

  // Обработчик сабмита формы поиска
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInput = (e.target as HTMLFormElement).searchInput.value.trim();

    if (searchInput.length === 0) {
      // Можно сбросить поиск или ничего не делать
      return;
    }

    // Обновляем параметры URL с новым запросом и страницей 1
    setSearchParams({ query: searchInput, page: "1" });
    setCurrentPage(1);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Form
        onSubmit={handleSearchSubmit}
        className="flex items-center mt-24 px-5 max-[400px]:px-3"
      >
        <input
          type="text"
          placeholder="Поиск товаров"
          className="border border-gray-300 focus:border-gray-400 h-12 text-xl px-3 w-full outline-none max-sm:text-lg rounded-lg shadow-lg"
          name="searchInput"
          defaultValue={searchParams.get("query") || ""}
        />
        <div className="w-52 max-sm:w-40">
          <Button mode="brown" text="Поиск" type="submit" />
        </div>
      </Form>

      <ProductGridWrapper searchQuery={searchParams.get("query") ?? ""} page={currentPage}>
        <ProductGrid />
      </ProductGridWrapper>

      <ShowingSearchPagination page={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Search;
