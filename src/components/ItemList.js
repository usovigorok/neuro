import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
  return (<ul>
    {items.map((item, index) =>
      <Item
        key={index}
        {...item}
      />
    )}
  </ul>)
}

export default ItemList
