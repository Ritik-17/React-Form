import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    country: "India",
    Address: "",
    City: "",
    state: "",
    ZIP: '',
    comments: false,
    Candidates: false,
    Offer:false,
    radio: "",
    
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
    <div >
      <div  >
          <form onSubmit={submitHandler} className=''>
            <label htmlFor='firstName' >First Name</label>
            <br/>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='Ritik'
              value={formData.firstName}
              onChange={changeHandler}
            />
            <br/>
            
            <label htmlFor='lastName' >Last Name</label>
            <br/>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Hutnarayan'
              onChange={changeHandler}
              value={formData.lastName}
            />

            <br/>
            <label htmlFor='email' >Email Address</label>
            <br/>
            <input
              type='text'
              name='email'
              placeholder='Ritikhutnarayan@gmail.com'
              id='email'
              onChange={changeHandler}
              value={formData.email}
            />

            <br/>
            <label >Country</label>
            <br/>
            <select
            name='country'
            id='country'
            value={formData.country}
            onChange={changeHandler}>
            <option value='India'>India</option>
            <option value='Spain'>Spain</option>
            <option value='USA'>USA</option>
            <option value='Japan'>Japan</option>
            <option value='Dubai'>Dubai</option>
            <option value='SriLanka'>SriLanka</option>
            <option value='China'>China</option>
            </select>

            <br/>
            <label htmlFor='Address' >Street Address</label>
            <br/>
            <input
              id='Address'
              name='Address'
              type='text'
              onChange={changeHandler}
              placeholder='Dwarka, Delhi'
              value={formData.Address}
            />
            <br/>
            <label htmlFor='City' >City</label>
            <br/>
            <input
              id='City'
              name='City'
              type='text'
              onChange={changeHandler}
              placeholder='Dwarka'
              value={formData.City}
            />
            <br/>
            <label htmlFor='state' >State / Province</label>
            <br/>
            <input
              id='state'
              name='state'
              type='text'
              onChange={changeHandler}
              placeholder='Delhi'
              value={formData.state}
            />
            <br/>
            <label htmlFor='ZIP' >ZIP / Postal Code</label>
            <br/>
            <input
              id='ZIP'
              name='ZIP'
              type='text'
              onChange={changeHandler}
              placeholder='110059'
              value={formData.ZIP}
            />

            <br/>
            <label >By Email</label>
            <br/>
            <div>
              <div>
              <input
                type='checkbox'
                id='comments'
                name='comments'
                checked={formData.comments}
                onChange={changeHandler}
                />
                <div>
                  <label htmlFor='comments'>Comments</label>
                  <p>Get notified when someone comments on a posting.</p>
                </div>
                
              </div>
              <div>
              
              <input
                type='checkbox'
                id='Candidates'
                name='Candidates'
                checked={formData.Candidates}
                onChange={changeHandler}
                />
                <div>
                  <label htmlFor='Candidates'>Candidates</label>
                  <p>Get notified when someone applies for a job.</p>
                </div>  
              </div>
              <div>
              <input
                type='checkbox'
                id='Offer'
                name='Offer'
                checked={formData.Offer}
                onChange={changeHandler}
                />
                <div>
                  <label htmlFor='Offer'>Offer</label>
                  <p>Get notified when a candidate accepts or rejects an offer.</p>
                </div>
                
              </div>
            </div>
            <div>
              <p>Push Notification</p>
              <p>These are delivered via SMS to your mobile phone</p>
              <div>
                <input
                  name='radio'
                  id='Everything'
                  value='Everything'
                  type='radio'
                  onChange={changeHandler}
                  />
                  <label htmlFor='Everything' >Everything</label>
                  <br/>
                  <input
                  name='radio'
                  id='SameAsEmail'
                  value='SameAsEmail'
                  type='radio'
                  onChange={changeHandler}
                  />
                  <label htmlFor='SameAsEmail' >Same As Email</label>
                  <br/>
                  <input
                  name='radio'
                  id='noPush'
                  value='noPush'
                  type='radio'
                  onChange={changeHandler}
                  />
                  <label htmlFor='noPush' >No Push Notification</label>
              </div>
            </div>
            <br/>
            <br/>
          <button className=' bg-blue-500 text-white'>
            Save
          </button>

        </form>

      </div>
     
    </div>
  );
}



       {/* <input
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
       */}

export default App;
