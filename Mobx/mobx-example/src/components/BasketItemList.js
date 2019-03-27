import React from 'react';
import BasketItem from './BasketItem';
import {observer, inject} from 'mobx-react';

const BasketItemList = ({items, total, onTake}) => {
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
      <hr />
      <p>
        <b>총합: </b> {total}원
      </p>
    </div>
  );
};

export default inject(({ market }) => ({
     items : market.selectItems,
     total : market.total,
     onTake : market.take
}))(observer(BasketItemList));