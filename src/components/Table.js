import React from 'react';
import dummyData from '../dummyData.json';

function JsonDataDisplay() {
  const DisplayData = dummyData.map((info) => {
    return (
      <tr key={info.Id}>
        <td>{info.Id}</td>
        <td>{info.Year}</td>
        <td>{info.Medals}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Medals</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
        </tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
