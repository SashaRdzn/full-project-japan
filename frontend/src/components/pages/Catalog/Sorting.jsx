import PropTypes from "prop-types";
import "../../../pages/Catalog/Catalog.css";

const Sorting = ({ onSort }) => {
  const sortOptions = [
    { value: "count&order=desc", label: "Популярное" },
    { value: "count&order=ask", label: "Не популярное" },
    { value: "default", label: "По умолчанию" },
  ];

  return (
    <div className="filter filter-2" id="filter-2">
      <button className="drop drop-2" id="drop-2">
        Сортировка
      </button>
      <div className="filter__box filter__box-2" id="filter__box-2">
        <div className="filter__list filter__list-2" id="filter__list-2">
          {sortOptions.map((option, index) => (
            <a
              key={index}
              className="filter__list__category filter__list__category-2"
              id={`filter__list__category-2-${index}`}
              onClick={(e) => {
                e.preventDefault();
                onSort(option.value);
                document
                  .querySelectorAll(".filter__list__category-2")
                  .forEach((el) => {
                    el.classList.remove("checked");
                  });
                e.target.classList.add("checked");
              }}
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

Sorting.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default Sorting;
