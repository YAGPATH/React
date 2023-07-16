## This is the format of inline style


import React from 'react'

function header() {
  const headerStyle = {
      backgroundColor: 'grey',
      color: 'white '
    };
  return (
    <header style={headerStyle}>
      <h1>Groceries List</h1>
    </header>
  );
}

export default header


- we can see that we have styled the header with outline styling. The type of styling is same for every component.





