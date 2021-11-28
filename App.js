import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Input from './components/input';
import { useState } from 'react';
import { render } from '@testing-library/react';
// im not really sure what formResult and setFormResult are supposed to do
// We went over useState in the ciriculum but... I just don't understand any of it
// I understand handleOnSubmit will handle the form submission,
// but I dont really know why thats necessary or what it does

function App() {
  const [formResult, setFormResult] = useState("");
//
  const handleOnSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
       <form onSubmit={handleOnSubmit}>
         <Input props="Noun"/>
         <Input props="Another noun"/>
         <Input props="Adjective"/>
         <Input props="Color"/>

         <Button />
      </form>
    </div>
  );
}

export default App;
