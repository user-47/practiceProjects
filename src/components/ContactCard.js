import React from 'react';


function ContactCard (props) {

    return (
        console.log(props),
            <div className="contacts">
                <img src={props.contact.imgUrl}/>
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p> 
                <p>Address: {props.contact.address}</p>
            </div>


    )

}

export default ContactCard