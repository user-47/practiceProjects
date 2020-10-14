// import React, { Component } from 'react';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles.css';
import TodoItem from './components/TodoItem';
import ContactCard from './components/ContactCard';
import TheJoker from './components/TheJoker';



function MyApp() {
        const firstName = "Olu";
        const lastName = "Ola";
        const date = new Date();
       

    return (
    <div className= "todo-list">
        {/* <Header/> */}
      
        {/* <TodoItem />  
        <TodoItem />  
        <TodoItem />  
        <TodoItem />  
        <TodoItem />  
        <Footer/> */}

        <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl:"http://placekitten.com/300/200" , phone:"(212) 555-1234", email: "mr.Whiskerz@catnap.meow", address:"123, 12th ST SW" }}
                />

        <ContactCard 
                contact={{name: "Fluffykins", imgUrl:"http://placekitten.com/400/200" , phone:"(212) 555-2345", email: "12234@yahoo.com" }}
        />

        <ContactCard 
                 contact={{name: "Destroyer", imgUrl:"http://placekitten.com/400/300" , phone:"(212) 555-4567", email: "pfdestroysWorlds@yahoo.com" }}
        />

        <ContactCard 
               contact={{name: "Ms. Willows", imgUrl:"http://placekitten.com/200/200" , phone:"(212) 555-4536", email: "thecat@yahoo.com" }}
        />


        <TheJoker
                jokes={{question: "Knock Knock", punchline: "Who's There"}}
        />
        <TheJoker
                jokes={{ punchline: "Did you hear about the actor blah blah"}}
        />
        <TheJoker
                jokes={{question: "", punchline: ""}}
        />
        <TheJoker
                jokes={{question: "", punchline: ""}}
        />
        <TheJoker
                jokes={{question: "", punchline: ""}}
        />

        </div>
        )

}


export default MyApp 
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"))