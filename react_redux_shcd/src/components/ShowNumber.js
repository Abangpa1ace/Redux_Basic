import React from 'react';


const ShowNumber = ({ number }) => {
  return (
    <div>
      <h2>Show Number</h2>
      <input type="text" value={number} />
    </div>
  )
}

export default ShowNumber
