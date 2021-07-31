import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

const Foo = ({name}) => {

  return (
    <p> This is a Foo Component. Its is {name} </p>
  )

}

const Foo1 =({name1}) => {
  return (
    <p> This is a Foo1 Component. Its name is {name1} </p>
  )
}

const Item = (props) => {
 console.log(props)
    return (
<div>
      <p> This is an Item component. Its name is {props.name} </p>
      
      <Foo1 name1 ={'Andre '} />
      <Foo name = {'Elise'} />
      </div>
      )

}

const xyz = <p> This is an item</p> //elements

const abc = 
<div>
    <h1> Hello Element ! </h1>
    <p> This is a test</p>
    <Item name = {'Rahul'}/>
   
    

</div>


ReactDOM.render(
   <App />,
    //abc,
    //<h1> Hello world !!</h1>,
  
    //<div>
    //<Button primary>Primary</Button>
    //<Button secondary>Secondary</Button>
    //</div>,
    document.getElementById('root')
);

