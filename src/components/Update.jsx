import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../assets/styles/Update.css';

const Update = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const {id} = useParams();

    useEffect(() => {
    axios.get('http://localhost:5000/employee/' + id)
    .then(res => {
      setUserData(res.data)
    })
    .catch(err => console.log(err));
    }, [id]);

    const handleChange =(e) =>{
      setUserData({...userData, [e.target.name] : e.target.value})
    }
    
    const handleUpdate =(e)=>{
      e.preventDefault();
      axios.put('http://localhost:5000/employee/'+id, userData)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
    }
  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='border bg-white shadow px-5 pt-3 pb-5 rounded update_box'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
            <div className='mb-2'>
              <label htmlFor="">Name:</label>
              <input 
              type='text' 
              name='name' 
              className='form-control' 
              placeholder='Enter Name'
              value={userData.name}
            onChange={handleChange}
              
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="">Email:</label>
              <input 
              type='email' 
              name='email' 
              className='form-control' 
              placeholder='Enter Email'
              value={userData.email}
              onChange={handleChange}
             
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="">Phone:</label>
              <input 
              type='text' 
              name='phone' 
              className='form-control' 
              placeholder='Enter Phone'
              value={userData.phone}
              onChange={handleChange}
             
              />
            </div>
            <button className='btn btn-success'>Update</button>
            <Link to='/' className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Update
