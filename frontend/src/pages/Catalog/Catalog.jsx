import { useState, useEffect } from 'react';
import Search from '../../components/pages/Catalog/Search';
import CreateCard from '../../components/pages/Catalog/CreateCard';
import Filter from '../../components/pages/Catalog/Filter';
import Sorting from '../../components/pages/Catalog/Sorting';
import InfinityScroll from '../../components/pages/Catalog/InfinityScroll';
import './Catalog.css'
import {useNavigate} from "react-router-dom";

const Catalog = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('default');
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const urlMoc = 'https://672a07666d5fa4901b6f7076.mockapi.io/card/';
    const navigate = useNavigate();
    const loader = document.getElementById("infinity__scroll");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (loader) {
              loader.style.display = "flex";
            }
            const url = new URL(urlMoc);
            url.searchParams.append('page', page);
            url.searchParams.append('limit', 10);
            if (searchQuery) url.searchParams.append('title', searchQuery);
            if (filters.category) url.searchParams.append('category', filters.category);
            if (sortBy !== "default") {
              const [sortByValue, order] = sortBy.split("&order=");
              url.searchParams.append("sortBy", sortByValue);
              if (order) {
                url.searchParams.append("order", order);
              }
            }
            try {
                const response = await fetch(url);
                console.log('43');
                
                if (!response.ok) throw new Error('Ошибка загрузки');
                const newData = await response.json();

                setData((prevData) => (page === 1 ? newData : [...prevData, ...newData]));
                setHasMore(newData.length > 0);
            } catch (error) {
                console.error('Ошибка:', error);
            } finally {
                setIsLoading(false);
                if (loader) {
                  loader.style.display = "none";
                }
            }
        };
        fetchData();
    }, [page, filters, searchQuery, sortBy, loader]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100 &&
                !isLoading &&
                hasMore
            ) {
                setPage((prevPage) => prevPage + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading, hasMore]);

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
        <div className="container">
            <div className="search">
                <Sorting onSort={handleSort} />
                <Filter onFilter={handleFilter} />
                <Search onSearch={handleSearch} />
            </div>
        </div>
        <div className="catalog">
            <div className="catalog__card" id="catalog__card">
                <CreateCard key={data.id} data={data} onCardClick={handleCardClick} />
            <InfinityScroll />
            </div>
        </div>
        </>
    );
};
export default Catalog