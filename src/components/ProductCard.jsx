const ProductCard = ({ data }) => {
  return (
    <div className="product-card">
      <div className="product-card__body">
        <div className="product-card__product-detail">
          <p className="product-card__product-code">{data?.code}</p>
          <p className="product-card__product-name">{data?.name}</p>
        </div>
        <div className="product-card__product-topping-wrap">
          <p className="product-card__product-topping-title">Toppings:</p>
          {data?.toppings?.length > 0 && (
            <p className="product-card__product-topping-name">
              {data?.toppings?.join(', ')}
            </p>
          )}
        </div>
      </div>
      <div className="product-card__footer">
        <p className={`product-card__trending ${data?.trending && 'active'}`}>
          Trending
        </p>
        <p className="product-card__price">${data?.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
