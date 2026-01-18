// import {use , useState} from 'react';

// const Counter = () => {
//     //  let num = 0;
//   const [num , setNum] = useState (0);
//   const addnum = ()=> {
//     setNum(num + 1)
//   }
//   const lessnum = () => {
//     setNum(num - 1)
//   }
//   const reset = () => {
//     setNum(num === 0)
//   }
//     return (
//         <div>
//           <h1>{num}</h1>
//                <button onClick={addnum}>+</button>
//                <button onClick={lessnum}>-</button>
//                <button onClick={reset}>Reset</button>
//         </div>
//     );
// }

// export default Counter;


import {use , useState} from 'react';
function App(){
  const [title , settitle] = useState('')
  const [discription , setdiscription] = useState('')
  const [todo , settodos] = useState ([])
  const addtodo = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(discription);
    
    
    todo.push({title , discription})
    settodos([...todo])
    setdiscription('')
    settitle('')
  }
  const edittodo = (index) => {
    const newtitle = prompt("Enter the updated title")
    todo[index].title = newtitle
    settodos([...todo])
  }
  return (
   <>
   <h1>Todo List</h1>
      <form onSubmit={addtodo}>
      <input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Enter the title" />
      <input type="text" onChange={(e) => setdiscription(e.target.value)} value={discription} placeholder="Enter the discription" />
      <button>add Todo</button>        
      </form>
      <div>
        {todo.length > 0 ? todo.map((item , index) => {
          return (
            <div key={index} style={{border : '1px solid black' , margin : '11px' , padding : '11px'}}>
              <h2>{item.title}</h2>
              <p>{item.discription}</p>
              <button onClick={() => {
                const newtodos = todo.filter((todoitem , idx) => idx !== index)
                settodos(newtodos)
              }}>Delete</button>
              <button onClick={() => edittodo(index)}>Edit</button>

            </div>
          )
          
        }) : <p>No todos yet..</p>}
      
      </div>
      </>

  )
}
export default App;
