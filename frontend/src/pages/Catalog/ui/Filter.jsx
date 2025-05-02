import PropTypes from "prop-types";
import "../../../pages/Catalog/Catalog.css";

const Filter = ({ onFilter }) => {
  const categories = [
    { label: "Парки", value: "parks" },
    { label: "Музеи", value: "museums" },
    { label: "Рестораны", value: "restaurants" },
    { label: "Храмы", value: "temples" },
    { label: "Торговые центры", value: "malls" },
    { label: "Уличные рынки", value: "markets" },
  ];

  return (
    <div className="filter" id="filter">
      <button className="drop" id="drop">
        Локации
      </button>
      <div className="filter__box" id="filter__box">
        <div className="filter__list" id="filter__list">
          {categories.map((category, index) => (
            <a
              key={index}
              className="filter__list__category"
              id={`filter__list__category-${index}`}
              onClick={(e) => {
                e.preventDefault();
                onFilter(category.value.toLocaleLowerCase());
                document.querySelectorAll(".filter__list__category").forEach((el) => {
                    el.classList.remove("checked");
                  });
                e.target.classList.add("checked");
              }}
            >
              {category.label}
            </a>
          ))}
          <a
            className="filter__list__category"
            onClick={(e) => {
              e.preventDefault();
              onFilter("");
              document
                .querySelectorAll(".filter__list__category")
                .forEach((el) => {
                  el.classList.remove("checked");
                });
              e.target.classList.add("checked");
            }}
          >
            Убрать фильтр
          </a>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
