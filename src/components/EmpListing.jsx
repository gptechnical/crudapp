import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import '../assets/styles/EmpListing.css';

const EmpListing = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:5000/employee')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
    }, []);

  const handleDelete =(id)=>{
    const confirm = window.confirm("would you like to delete?")
    if(confirm){
      axios.delete('http://localhost:5000/employee/'+id)
      .then(res => {
        window.location.reload()     
      }).catch(err => console.log(err));
    }
  }
  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-end align-items-end'>
            <Link to="/create" className='btn btn-success'>Add +</Link>
        </div>
      <div className='box-wraper'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((d, i) => (
            <tr key={i}>
               <td>{d.id}</td>
               <td>{d.name}</td>
               <td>{d.email}</td>
               <td>{d.phone}</td>
               <td style={{whiteSpace: "nowrap"}}>
                <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                <button onClick={e =>handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
               </td>
            </tr>
        ))
       }
      </tbody>
    </Table>
    </div>
      </div>
    </>
  )
}

export default EmpListing
