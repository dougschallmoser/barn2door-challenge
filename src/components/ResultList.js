import React from 'react';
import ResultCard from './ResultCard';

const ResultList = ({ items }) => {

  const allItems = items.map(item => {
    return <ResultCard key={item.id} item={item} />
  })

  return (
    <div className="results-container">
      {allItems}
    </div>
  )
}

export default ResultList;