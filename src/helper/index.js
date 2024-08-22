export const handleCheckValid = (listTopping, listFilter) => {
  let valid = false;

  listTopping?.forEach((topping) => {
    listFilter?.forEach((filterItem) => {
      if (filterItem === topping) {
        valid = true;
      }
    });
  });

  return valid;
};

export const handleGetSort = (sort, filterProducts) => {
  let sortProducts;
  if (sort.type === 'name') {
    if (sort.value === 'asc') {
      sortProducts = filterProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else {
      sortProducts = filterProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
  } else {
    if (sort.value === 'asc') {
      sortProducts = filterProducts.sort((a, b) => a.price - b.price);
    } else {
      sortProducts = filterProducts.sort((a, b) => b.price - a.price);
    }
  }

  return sortProducts;
};
