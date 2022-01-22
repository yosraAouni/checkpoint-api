
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState()
  const [input, setInput] = useState({})
  const [error, setError] = useState()

  useEffect(() => {
    //first method with fetch
    //fetch("https://jsonplaceholder.typicode.com/users")
    //.then(res=>res.json())
    //.then(res=>setUsers(res))
    //.catch(err=>setError(err))

    //second method with axios
    //axios.get("https://jsonplaceholder.typicode.com/users")
    //.then(res=>setUsers(res.data))
    //.catch(err=>setError(err))


    //third method with async funtion axios
    const fetchData=async()=>{
      try {
        const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
      } catch (err) {
        setError(err)
      }

    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {error && <p style={{color:"red"}}> can't load data </p>}
      {users && users.map(el=> <div> <h1> {el.name} </h1> <h2> {el.username} </h2> <p> {el.email} </p> </div>)}
      <input onChange={(e)=>setInput(e.target.value)} type='text'/>
      <button onClick={()=>setUsers([...users,{name:input}])}> submit </button>
    </div>
  );
}

export default App;
