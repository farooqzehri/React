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
  const addtodo = (flex) => {
    flex.preventDefault();
    console.log(title);
    console.log(discription);
    
    
    todo.push(title , discription)
  }
  return (
    <div>
      <form >
      <input type="text" value={title} placeholder="Enter the title" />
      <input type="text" value={discription} placeholder="Enter the discription" />
      <button>add Todo</button>        
      </form>
    </div>
  )
}
export default App;