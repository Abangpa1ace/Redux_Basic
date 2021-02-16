import React, { useState } from 'react';

const AddNumber = ({ onClick }) => {
  const [size, setSize] = useState(1);

  return (
    <div>
      <h3>Add Number</h3>
      <input type="text" value={size} onChange={(e) => {
        setSize(Number(e.target.value));
      }} />
      <input type="button" value="+" onClick={() => onClick(size)}/>
    </div>
  )
}

export default AddNumber
