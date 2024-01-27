import React from 'react';
import './Table.css';

function Table() {
  const data = Array.from({length: 21}, (_, i) => i + 1);

  return (
    <div className="table">
      <div className="header">
        <div className="header-cell">
          <div className="header-text">Header 1</div>
          <div className="header-text">Header 2</div>
        </div>
        {data.map((item, index) => (
          <div key={index} className="header-cell">
            <div className="header-text">{item}</div>
          </div>
        ))}
      </div>
      <div className="body">
        {data.map((item, index) => (
          <div key={index} className="body-cell">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;