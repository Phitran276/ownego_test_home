import React from "react";
import {Card, Code, Name, Hr, ToppingTitle, Topping, Price} from './Styles';

const BoardItem = ({product}) => {
  const {id, name, price, toppings} = product;
  return (
    <Card>
        <Code>{id}</Code>
        <Name>{name}</Name>
        <Hr />
        <ToppingTitle>Toppings:</ToppingTitle>
        <Topping>{toppings}</Topping>
        <Price>${price}</Price>
    </Card>
  );
};

export default BoardItem;
