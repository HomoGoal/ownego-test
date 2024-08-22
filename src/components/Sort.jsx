import { sortList } from '../data';

import { useState, useRef, useEffect } from 'react';

import dropdown from '../assets/icon/dropdown.png';

const Sort = ({ sort, setSort }) => {
  const [openSort, setOpenSort] = useState(false);

  const sortRef = useRef();

  const handleOpenSort = () => {
    setOpenSort(!openSort);
  };

  const handleSetSort = (value) => {
    setSort(value);
    handleOpenSort();
  };

  const handleDetectOutside = (event) => {
    if (!sortRef?.current?.contains(event.target)) {
      setOpenSort(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleDetectOutside);

    return () => window.removeEventListener('click', handleDetectOutside);
  }, []);

  return (
    <div className="sort__container">
      <p className="sort__title">Sort By</p>

      <div className="sort__select" ref={sortRef}>
        <button
          className={`sort__header ${openSort && 'active'}`}
          onClick={handleOpenSort}
        >
          <p>{sort?.name}</p>
          <img src={dropdown} alt="dropdown icon" />
        </button>
        {openSort && (
          <div className="sort__list">
            {sortList?.map((item) => (
              <button
                key={item.name}
                className={`sort__item ${
                  sort?.name === item?.name && 'active'
                }`}
                onClick={() => handleSetSort(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
