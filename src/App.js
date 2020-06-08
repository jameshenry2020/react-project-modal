import React,{useState} from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ModalContainer } from './components/ModalContainer';

function App() {
  const [open, setOpen]=useState(false);

 const openMenu=()=>{
   setOpen(true);
 }
 const closeModal=()=>{
   setOpen(false)
 }
  return (
    <div className="App">
      <Navbar openfn={openMenu}/>
      
      <ModalContainer show={open} close={closeModal}/>
    </div>
  );
}

export default App;
