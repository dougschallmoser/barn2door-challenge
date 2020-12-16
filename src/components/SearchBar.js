import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

  const [term, setTerm] = useState('')
  const [resultsTerm, setResultsTerm] = useState('')
  const [displayQuery, setDisplayQuery] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term)
    setDisplayQuery(true)
    setResultsTerm(term)
    setTerm('')
  }

  const handleChange = (event) => {
    setTerm(event.target.value.toLowerCase())
  }

  return (
    <>
      <form id="search-bar" onSubmit={handleSubmit}>
        <input 
          type="text"
          value={term}
          onChange={handleChange}
          placeholder="What are you looking for?"
        />
        <input type="submit" value="Search" />
      </form>

      {displayQuery && 
        <div id="display-query">Showing results for '{resultsTerm}'
        </div>
      }
    </>
  )
}

export default SearchBar;