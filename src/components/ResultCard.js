import React from 'react';

const ResultCard = ({ item: { title, img, description } }) => {
  return (
    <div className="result-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img 
        src={img || '/images/placeholder.jpg'} 
        style={{ opacity: img ? 1 : 0.5 }}
        alt={description}
      />
    </div>
  )
}

export default ResultCard;