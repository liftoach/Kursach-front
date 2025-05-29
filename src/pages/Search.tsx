import { useState } from "react";
import {
  Button,
  ProductGrid,
  ProductGridWrapper,
  ShowingSearchPagination,
} from "../components";
import { Form, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(searchParams.get("page") || "1")
  );

  // Кодирование строки запроса перед отправкой
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInput = (e.target as HTMLFormElement).searchInput.value;
    const encodedQuery = encodeURIComponent(searchInput);
    // Обновление searchParams с закодированным запросом
    // Это может потребовать использования метода для обновления URL в вашем роутере
    window.location.href = `/search?query=${encodedQuery}&page=1`;
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
        />
        <div className="w-52 max-sm:w-40">
          <Button mode="brown" text="Поиск" type="submit" />
        </div>
      </Form>

      <ProductGridWrapper searchQuery={searchParams.get("query")!} page={currentPage}>
        <ProductGrid />
      </ProductGridWrapper>

      <ShowingSearchPagination page={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Search;
