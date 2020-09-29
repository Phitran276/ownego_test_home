import React, { Fragment } from "react";
import { Board, Title, ListItem } from "./Styles";
import Filter from "./Filter";
import Data from "../../../data/products.json";
import useMergeState from "../hooks/useMergeState";

import Item from "./Item";

const AppBoard = () => {
  const { products, typeToppings } = Data;
  const [filter, mergeFilter] = useMergeState({ typeToppings: [] });
  const [sortBy, mergeSort] = useMergeState({ name: "" });

  
  const filteredProducts = (products) => {
    const newProducts = products.reduce((acc, item) => {
      let check = true;
      for (let i = 0; i < filter.typeToppings.length; i++) {
        if (!item.toppings.toLowerCase().includes(filter.typeToppings[i])) {
          check = false;
        }
        if (i === filter.typeToppings.length - 1 && check) {
          acc.push(item);
        }
      }
      return acc;
    }, []);
    return newProducts;
  };

  const renderItem = (products) => {
    return products.map((item) => <Item product={item} key={item.id} />);
  };

  return (
    <Fragment>
      <Board>
        <Title>Ding Tea Menu</Title>
        <Filter
          typeToppings={typeToppings}
          mergeFilter={mergeFilter}
          filterType={filter}
          mergeSort={mergeSort}
        />
        <ListItem>
          {filter.typeToppings.length !== 0
            ? renderItem(filteredProducts(products))
            : !!sortBy.name
            ? renderItem(sortProductsBy(products, sortBy.name))
            : renderItem(products)}
        </ListItem>
      </Board>
    </Fragment>
  );
};

const sortProductsBy = (products, type) => {
  const newProducts = [...products];
  switch (type) {
    case "name-asc":
      newProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-dsc":
      newProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price-asc":
      newProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-dsc":
      newProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      return newProducts;
  }
  return newProducts;
};

export default AppBoard;
