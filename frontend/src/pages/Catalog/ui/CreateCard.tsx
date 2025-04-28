const CreateCard = ({ data, onCardClick }: any) => {
  return (
    <div className="catalog__card-1" onClick={() => onCardClick(data.id)}>
      <div className="catalog__card-1-images">
        {data.images && data.images.length > 0 ? (
          data.images.map((el) => (
            <div key={el.id}>
              <img src={el.image} alt={data.title} />
            </div>
          ))
        ) : (
          <div>No images available</div>
        )}
      </div>
      <div className="catalog__card-1-content">
        <h3>{data.title}</h3>
        <h4>Адрес:</h4>
        <span>{data.address}</span>
        <span>Категория: </span>
        <span>
          {data.categories.map((el) => (
            <div key={el.id}>
              <span>{el.title}</span>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default CreateCard;
