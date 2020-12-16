import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import jsonData from './API/example_data.json';

const App = () => {

  const [items, setItems] = useState([])

  const handleSubmit = async (term) => {
    const data = JSON.parse(JSON.stringify(jsonData));
    const filteredData = data.items.filter(item => {
      return item.categories.some(cat => cat.name.toLowerCase().includes(term)) || 
          item.title.toLowerCase().includes(term)
    })
    setItems(filteredData)
  }

  return (
    <div id="search-container">
      <SearchBar onFormSubmit={handleSubmit} />
      <ResultList items={items} />
    </div>
  )
}

export default App;