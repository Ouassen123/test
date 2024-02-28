import React, { useState, useEffect } from 'react';
import YourDataModel from '../path-to-db-file/db'; 

const MongoDBData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const result = await YourDataModel.find(); 
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>MongoDB Data Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MongoDBData;