import PropTypes from "prop-types";
import "../../../pages/Catalog/Catalog.css";
import { sortOptions } from "../../../shared/constants/constants";
const Sorting = ({ onSort }) => {
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
              }}>
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
