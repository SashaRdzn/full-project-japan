import { useState, useEffect } from "react";
import Search from "./ui/Search";
import CreateCard from "./ui/CreateCard";
import Filter from "./ui/Filter";
import Sorting from "./ui/Sorting";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const url = import.meta.env.VITE_SERVER_BASE_URL
  const urlMoc = `${url}api/catalog/cards/`;
  const navigate = useNavigate();
  const loader = document.getElementById("infinity__scroll");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (loader) {
        loader.style.display = "flex";
      }
      const url = new URL(urlMoc);
      if (searchQuery) url.searchParams.append("title", searchQuery);
      if (filters.category)
        url.searchParams.append("category", filters.category);
      if (sortBy !== "default") {
        const [sortByValue, order] = sortBy.split("&order=");
        url.searchParams.append("sortBy", sortByValue);
        if (order) {
          url.searchParams.append("order", order);
        }
      }
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ошибка загрузки");
        const newData = await response.json();

        setData((prevData) =>
          page === 1 ? newData : [...prevData, ...newData]
        );
        setHasMore(newData.length > 0);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setIsLoading(false);
        if (loader) {
          loader.style.display = "none";
        }
      }
    };
    fetchData();
  }, [page, filters, searchQuery, sortBy, loader]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleFilter = (category) => {
    setFilters({ category });
    setPage(1);
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
    setPage(1);
  };

  const handleCardClick = (id) => {
    navigate(`/catalog/card/${id}`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.search}>
          <Sorting onSort={handleSort} />
          <Filter onFilter={handleFilter} />
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className={styles.catalog}>
        <div className={styles.catalog__card} id="catalog__card">
          {data.map((card) => (
            <div key={card.id}>
              <CreateCard data={card} onCardClick={handleCardClick} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
