import React , {useState} from 'react';
import './App.css';
import Extract from './components/account/extracts';
import Cards from './components/Cards';
import AddForm from './components/addForm/addForm';



const App = (props) => {
  
  const [setAddForm] = useState("");

  return (
    <div className='app'>
      <div>
        <h2 className='app_header'>Good Morning</h2>
        <h2 className='app_name'>Mr. Zayn Malik</h2>
        <div className='card_component'>
          <h3>Credit Cards</h3>
          <div className='cards_all'>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <button  onClick={setAddForm} type="button" className="btn" >+</button>
        </div>
      </div>
      <Extract />
    </div>
  );
}

export default App;
