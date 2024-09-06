
import React, { useState } from 'react';

// This is our list of things we want to be able to search through
const items = ['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape'];


// This is the main part of our search feature - it's like a recipe
function SearchFilter() {
  // This line creates a special container called "search" to hold what the user types in the search box.
  // It starts off empty. "setSearch" is a tool to change what's in the container.
  const [search, setSearch] = useState('');


  // This is a small helper recipe that gets run every time someone types in the search box
  function handleInputChange(event) {
    // This line takes what the user typed and puts it in our "search" container
    setSearch(event.target.value);
  }
  // This line goes through our list of items and picks out the ones that match what's in the "search" container
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase()) // This makes sure we find matches even if the user types in lowercase or uppercase
  );
  
  
  // This part tells the computer what to show on the screen
  return (
    <div> {/* This is like a container to hold the search box and the results */}
      <input type="text" value={search} onChange={handleInputChange} /> {/* This is the search box */}
      <ul> {/* This is a list to show the results */}
        {filteredItems.map((item, index) => ( // This goes through each of the matching items and adds it to the list
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
}
// This line shares our search feature so other parts of our app can use it
export default SearchFilter;