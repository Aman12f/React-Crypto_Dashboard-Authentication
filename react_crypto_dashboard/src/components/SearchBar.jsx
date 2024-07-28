import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const SearchBar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '200px', margin: '0 auto' }}>
      <input
        type="text"
        placeholder="Search by ID or destination"
        style={{
          width: '100%',
          padding: '10px 20px 10px 40px', // Padding to make space for the icon
        //   border: '1px solid #ccc',
          outline: 'none', // Remove the default focus outline
          borderRadius: '5px', // Slight border radius
          transition: 'border-color 0.3s, box-shadow 0.3s', // Smooth transition for the focus effect
          backgroundColor: '#EEEEF4', // Set background color
          color:"grey",
          fontWeight:"400",
          fontSize:"14px"
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'lightblue';
          e.target.style.boxShadow = '0 0 5px lightblue';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#ccc';
          e.target.style.boxShadow = 'none';
        }}
      />
      <FaSearch
        style={{
          position: 'absolute',
          left: '15px',
          fontSize: '16px',
          color: '#aaa',
        }}
      />
    </div>
  );
};

export default SearchBar;

