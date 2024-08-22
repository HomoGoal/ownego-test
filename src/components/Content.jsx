import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Sort from '../components/Sort';
import Checkbox from '../components/Checkbox';
import ProductCard from '../components/ProductCard';

import { handleCheckValid, handleGetSort } from '../helper';

import { stores, products, sortList } from '../data';

const Content = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [store, setStore] = useState(null);
  const [listFilter, setListfilter] = useState([]);
  const [sort, setSort] = useState(sortList[0]);

  const filterRef = useRef();

  useEffect(() => {
    filterRef.current.classList.remove('active');
    filterRef.current.style.height = '0';
    setSort(sortList[0]);

    if (params?.id) {
      const target = stores.find((item) => item?.id === Number(params?.id));

      if (target) {
        const newProducts = products.filter((product) =>
          target.products?.includes(product?.id)
        );

        const productWithTrending = newProducts.map((item) => {
          if (target?.trending?.includes(item?.id)) {
            return { ...item, trending: true };
          } else {
            return { ...item, trending: false };
          }
        });

        const toppings = [
          ...new Set(
            productWithTrending.reduce(
              (total, item) => [...total, ...item.toppings],
              []
            )
          ),
        ];

        setListfilter(toppings);

        setStore({
          ...target,
          products: productWithTrending,
          toppings,
        });
      } else {
        navigate(`/${stores[0]?.id}`);
      }
    } else {
      navigate(`/${stores[0]?.id}`);
    }
  }, [params]);

  const handleActiveFilter = () => {
    if (filterRef.current.classList.contains('active')) {
      filterRef.current.classList.remove('active');
      filterRef.current.style.height = '0';
    } else {
      filterRef.current?.classList.add('active');
      filterRef.current.style.height = filterRef.current.scrollHeight + 'px';
    }
  };

  const handleSetFilter = (value) => {
    if (listFilter?.includes(value)) {
      setListfilter(listFilter?.filter((item) => item !== value));
    } else {
      setListfilter([...listFilter, value]);
    }
  };

  const handleControlProduct = () => {
    if (store?.products?.length > 0) {
      const filterProducts = store?.products?.filter((product) => {
        const valid = handleCheckValid(product?.toppings, listFilter);

        if (valid) {
          return product;
        }
      });

      let sortProducts = handleGetSort(sort, filterProducts);

      return sortProducts;
    } else {
      return [];
    }
  };

  const renderProduct = handleControlProduct();

  return (
    <div className="content">
      <div className="content__container">
        <h2 className="content__header">{store ? store.name : '404'}</h2>
        <div className="content__control">
          <div className="content__control-wrapper">
            <button
              className="content__filter-button"
              onClick={handleActiveFilter}
            >
              Filter
            </button>

            <Sort sort={sort} setSort={setSort} />
          </div>
          <div className="content__filter-wrapper" ref={filterRef}>
            <div className="content__filter-inner">
              <p className="content__filter-title">Toppings:</p>
              {store?.toppings?.length > 0 && (
                <div className="content__filter-list">
                  {store?.toppings?.map((item) => (
                    <Checkbox
                      key={item}
                      handleSetFilter={handleSetFilter}
                      data={item}
                      checked={listFilter?.includes(item)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {renderProduct?.length > 0 && (
          <div className="content__product-list">
            {renderProduct?.map((item) => (
              <ProductCard
                key={item?.code}
                className="content__product-item"
                data={item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
