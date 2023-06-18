
import ContactCard from "./ContactCard";

export default function ContactList(props){
    
    const clickHandler = (id) => {
      
       props.removeId(id);
      }
    const renderdList = props.contacts.map(contact =>{
        return(
            <ContactCard contact={contact} key={contact.id} clickHandler={clickHandler}/>
        )
    })
    
    
    return(
        <div className="ui  celled list container">
            {renderdList}
        </div>
    )
   
    
}; 