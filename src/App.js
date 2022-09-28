import React , {useState} from 'react';
import './App.css';
import Extract from './components/account/extracts';
import Cards from './components/Cards';
import AddForm from './components/addForm/AddForm';

const App = (props) => {
  
  const [ isOpenAddForm, setIsOpenAddForm] = useState(true);

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
          <button  className="btn" onClick={setIsOpenAddForm} type="button" >+</button>
        </div>
      </div>
      <Extract />
      <AddForm/>
    </div>
  );
}

export default App;
