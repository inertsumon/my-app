// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      

<Todo></Todo>



      {/* <Mobile></Mobile> */}
      
      
      {/* <News heading="Number-1" author="Sumon"></News>
      <News heading="Number-2" author="Eumon"></News>
      <News heading="Number-3" author="Dumon"></News> */}
      

    </div>
  );
}

function Todo() {

  
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))},[]);

  return (
    <div >
      
      {
        todos.slice(0,20).map(todo => 
          <ShowTodo id={todo.id} title={todo.title}> </ShowTodo>
        )
      }     

    </div>
  )
}

function ShowTodo(props) {
  
  const design = {
    backgroundColor : "gray",
    color: "orange",
    padding: "5px",
    borderRadius: "5px",
    margin: "20px"
  }
  return (
    <div style={design}>
      <h4>id: {props.id}</h4>
      <h4>id: {props.title}</h4>
    </div>
  )
}








/* function Mobile() {
  
  const design = {
        backgroundColor : "gray",
        color: "orange",
        padding: "5px",
        borderRadius: "5px",
        margin: "20px"
  }
  
  const [chargeCount, setCharge] = useState(100);
  
  const handleCharge = () => {
    const newCharge = chargeCount - 10;
    if (newCharge < 0) {
      return setCharge(100);
    }
    else {
      return setCharge(newCharge);
    }
  }


  return (
    <div style={design}>
      <h2>Bettary {chargeCount}%</h2>
      <button onClick={handleCharge}>Click</button>
  </div>
    
  )
} */



/* function News(props) {
  const design = {
    backgroundColor : "gray",
    color: "orange",
    padding: "5px",
    borderRadius: "5px",
    margin: "20px"
  }

  return (
    <div style={design}>
      <article >
        <h3 className="blog">Thew Heading: {props.heading}</h3>
        <h2 className="blog">The Author: {props.author}</h2>
        <h4 className="blog"> Lorem ipsum dolor sit amet </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, dignissimos quod inventore placeat doloremque error asperiores nisi deleniti voluptatibus dolores quos impedit nobis, omnis mollitia nostrum! Corporis optio eveniet officia.</p>
       
</article>
    </div>
  )
}
 */


export default App;
