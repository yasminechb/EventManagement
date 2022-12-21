import React from 'react'
import InputGroup from "../components/InputGroup";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import {QueryClient, useMutation, useQuery}  from "react-query"

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
  const qr = new QueryClient()
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log(form)
    axios.put(`http://localhost:3002/upevent/${id}`, form)
    .then(res=>{
      qr.invalidateQueries("all_events")
      navigate('/')
      
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  const request_result  = useQuery(["sevent",id],async ()=>{
    const axios_req = await axios(`http://localhost:3002/sevent/${id}`)
    return axios_req.data
  },{onSuccess: (res)=>{
    setForm(res)
  }})

  if(request_result.isLoading)
    return <h1>Loading ...</h1>
  if(request_result.error)
    return <h1>Error ! </h1>
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
