import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [employees, setEmployees] = useState([])
  // on mount grab employees (from our rails server !!!)
  useEffect(()=>{
    getEmployees()
  },[])  

  // function to grab employees from our rails api
  const getEmployees= async() =>{
    try{
      let res = await axios.get('/api/employees')
      setEmployees(res.data)
    }catch(err){
       alert('err occured getting employees')
       console.log(err)
    }
  }

  const deleteEmployee = async (id) => {
    try{
    // delete from db
    let res = await axios.delete(`/api/employees/${id}`)
    console.log(res)
    // delete from my UI
    let newEmployees = employees.filter(e=> e.id !== id)
    setEmployees(newEmployees)
    } catch(err){
      alert('err occured deleting employees')
      console.log(err)
    }
  }
  const renderEmployees = ()=>{
   return employees.map(e=>{
     return(
      <div className='emp' key={e.id}>
        <h1>{e.name}</h1>
        <p>{e.position}</p>
        <button onClick={()=>{deleteEmployee(e.id)}}>delete</button>
      </div>
     )
    })
  }
  return (
    <div className="App">
        <h1>Employees</h1>
        {renderEmployees()}
        {/* <p>{JSON.stringify(employees)}</p> */}
    </div>
  );
}

export default App;
