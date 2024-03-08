import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/Read.css';

const Read = () => {
  const [data, setData] = useState([]);
  const {id} = useParams();

    useEffect(() => {
    axios.get('http://localhost:5000/employee/' + id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
    }, [id]);
  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
       <div className='border bg-white shadow px-5 pt-3 pb-5 rounded read_box'> 
          <h3>Details of User</h3>
          <div className='mb-2'>
            <strong>Name: {data.name}</strong>
          </div>
          <div className='mb-2'>
            <strong>Email: {data.email}</strong>
          </div>
          <div className='mb-2'>
            <strong>Phone: {data.phone}</strong>
          </div>
          <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
          <Link to='/' className="btn btn-primary ms-3">Back</Link>
       </div>
      </div>
    </>
  )
}

export default Read
