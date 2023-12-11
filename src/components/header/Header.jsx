import React, { useState } from 'react';
import './Header.css';

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">welcome to</span>
        <span className="headerTitleLg">Blog App</span>
      </div>
      <div className="headerSearch">
        <input
          type="text"
          className="headerSearchInput"
          placeholder="Search by Title eg: games, music"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="headerSearchButton" onClick={handleSearch}>
          Search
        </button>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}
