import React, { useState, useEffect } from 'react';
import dateFormat from './helpers/date-format';
//import dateFormat from 'dateformat';
//import logo from './logo.svg';
import './App.css';
import Engin from './models/engin';
import GridColumn from './models/grid-column';
import ENGINS from './mocks/mock-engins';
import ENGIN_GRID_COLUMNS from './mocks/mock-grid-columns-engin';

function App() {
  const [engins, setEngins] = useState<Engin[]>([]);
  const [columns, setColumns] = useState<GridColumn[]>([]);

  useEffect (() => {
    setEngins(ENGINS);
    setColumns(ENGIN_GRID_COLUMNS);
  }, []);

  const getRowColumn = (obj: Object, columnId: string): string => {
    const entries = Object.entries(obj);
    //console.log(entries);
    const entrie = entries.filter((entrie) => (entrie[0] === columnId));
    //console.log(entrie);
    const value = entrie[0][1];
    //console.log(value);
    //const valueType: string = Object.prototype.toString.call(value);
    //console.log(valueType);
    const typeOf = typeof value;
    //console.log(typeOf);
    if (typeOf === "undefined" || typeOf === "symbol" || typeOf === "function")
    {
      return "?";
    }
    if (typeOf === "object")
    {
      const objectType: string = Object.prototype.toString.call(value);
      //console.log(objectType);

      if (objectType === "[object Date]")
      {
        //console.log("c'est une date");
        return dateFormat(value);
      }
    }
    return value.toString();
  }

  return (
    <main>
      <h1 className="center">Engins</h1>

      <div className="container"> 
        <div className="row"> 
        {engins.map((engin) => (
          <div key={engin.registrationNumber} className="col s6 m4">
            <div className="card horizontal">
              <div className="card-image"> 
                <img src='' alt=''/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{engin.registrationNumber}</p>
                  <p><small>{engin.creationDate.toString()}</small></p>
                </div>
              </div>
            </div> 
          </div>
        ))}
        </div>
      </div>

      <table className='highlight'>
        <thead>
          <tr>
          {columns.map((column) => (
            column.display &&
            <th key={'col-'+column.id} style={{ border: 'solid black' }} scope="col">
              <div className="">
                <div className="left-align" style={{ border: 'dashed blue', display: 'inline-block' }}>{column.name}</div>
                <div className="right-align" style={{ border: 'dashed green', display: 'inline-block' }}>
                  <i className="material-icons right-align" style={{ border: 'dashed red' }}>more_vert</i>
                </div>
              </div>
            </th>
          ))}
          </tr>
        </thead>
        <tbody>
          {engins.map((engin) =>
            <tr key={'row-'+engin.registrationNumber}>
            {columns.map((column) =>
              column.display &&
              <td key={'row-col-'+column.id}>{getRowColumn(engin, column.id)}</td>
            )}
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );

  /*
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bonjour {name}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
