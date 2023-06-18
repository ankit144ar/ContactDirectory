import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,addContacts] = useState([]);
  const addContactData = (contact) => {
    addContacts([...contacts,contact])
  }

  const removeId = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    addContacts(newContacts);
  }
  


  useEffect(() => {
    const retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveData)  addContacts(retriveData);
     
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (    
    <div>  
          
      <Header/>
      <AddContact addContactData = {addContactData}/>
      <ContactList contacts={contacts} removeId={removeId}/>
    </div>
  );
}

export default App;
