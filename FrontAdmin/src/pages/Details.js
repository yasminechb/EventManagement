import React from 'react'
import InputGroup from "../components/InputGroup";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import {useMutation, useQuery}  from "react-query"

function Detail() {
 

  const [form, setForm] = useState({});
  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});


  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log(form)
    axios.put(`http://localhost:3002/UpdateEvent/${id}`, form)
    .then(res=>{
      navigate('/')
    })
    .catch(err=>setErrors(err.response.data))
    
  }
  useEffect(async () => {
    await axios.get(`http://localhost:3002/FindSinglEvent/${id}`).then((res) => {
      setForm(res.data);
    });
  }, []);
  
  return (
    <div>
      <div className="container mt-4 col-12 col-lg-4">
            <form onSubmit={onSubmitHandler}>
              <InputGroup
                label="EventName"
                type="text"
                name="EventName"
                onChangeHandler={onChangeHandler}
                errors={errors.EventName}
                value={form.EventName}
              />
              <InputGroup
                label="Organisateur"
                type="text"
                name="Organisateur"
                onChangeHandler={onChangeHandler}
                errors={errors.Organisateur}
                value={form.LastName}
              />
              <InputGroup
                label="Date"
                type="text"
                name="Date"
                onChangeHandler={onChangeHandler}
                errors={errors.Date}
                value={form.Date}
              />
              <InputGroup
                label="Description"
                type="text"
                name="Description"
                onChangeHandler={onChangeHandler}
                errors={errors.Description}
                value={form.Description}
              />
               <InputGroup
                label="Image"  
                type="text"
                name="Image"
                onChangeHandler={onChangeHandler}
                errors={errors.Image}
                value={form.Image}
              />
              <button className="btn btn-primary" type="submit">Update event</button>
            </form>
          </div>
    </div>
  )
} 

export default Detail
