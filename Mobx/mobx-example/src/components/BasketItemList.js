import React from 'react';
import BasketItem from './BasketItem';
import {observer, inject} from 'mobx-react';

const BasketItemList = ({items, onTake}) => {
  const itemList = items.map(item => (
    <BasketItem
       item={item}
       key = {item.name}
       onTake = {onTake} 
    />
  ));

  return (
    <div>
      {itemList}
    </div>
  );
};

export default inject(({ market }) => ({
     items : market.selectItems,
     onTake : market.take
}))(observer(BasketItemList));