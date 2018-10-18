import React from 'react'

const Item = ({ score, date }) => (
  <li>
    {date}: {score}
  </li>
)

export default Item
