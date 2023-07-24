import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    isVisible : true,
    mode: "",
    favcar: ""
  });

  function changeHandler(event){
    setFormData(prevFormData => {
      const {name, value, type, checked} = event.target;
      return {
        ...prevFormData,
        [name] : type === "checkbox"? checked : value
    }
    });
  }
  
  function submitHandler(event){
    event.preventDefault();
    console.log("Printing All Data");
    console.log(formData);
  }
  return (
    <div className="App">
     <form onSubmit={submitHandler} >
      <input
        type='text'
        placeholder='First Name'
        name='firstName'
        onChange={changeHandler}
      />
      <br/>
      <br/>
      <input
        type='text'
        placeholder='Last Name'
        name='lastName'
        onChange={changeHandler}
      />
      <br/>
      <br/>
      <input
        type='text'
        placeholder='Enter your Email'
        name='email'
        onChange={changeHandler}
      />
      <br/>
      <br/>
      <input
        type='checkbox'
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}
        onChange={changeHandler}
      />
      <label htmlFor='isVisible'>Am I Visible?</label>
      <br/>
      <br/>
      <fieldset>
        <legend>Mode:</legend>
        <input
        type='radio'
        name='mode'
        id='online-mode'
        value="online-mode"
        checked={formData.mode === 'online-mode'}
        onChange={changeHandler}
      />
      <label htmlFor='online-mode'>Online Mode</label>
      <input
        type='radio'
        name='mode'
        id='offline-mode'
        value='offline-mode'
        checked={formData.mode === 'offline-mode'}
        onChange={changeHandler}
      />
      <label htmlFor='offline-mode'>Offline Mode</label>
      <br/>
      <br/>

      <label htmlFor='favcar'>Choose Your Car</label>
      <select
      name='favcar'
      id='favcar'
      value={formData.value}
      onChange={changeHandler}
      >
      <option value='Scarpio' >Scarpio</option>
      <option value='Fartuner' >Fartuner</option>
      <option value='Legender' >Legender</option>
      <option value='Defender' >Defender</option>
      <option value='Tharr' >Tharr</option>
      

      </select>
      </fieldset>
      <button>Submit</button>
      
     </form>
    </div>
  );
}

export default App;
