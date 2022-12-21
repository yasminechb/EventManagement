import React from 'react'
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import Alert from "../components/Alert";
import {useState} from 'react';
import {useEffect} from 'react';
import {useMutation, useQuery}  from "react-query"

function Home() {
  const request_result  = useQuery("all_events",async ()=>{
    const axios_req = await axios("http://localhost:3002/findevents")
    return axios_req.data
  })

  console.log(request_result)
  const events = request_result.data
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log(form)
    axios.post('http://localhost:3002/addevent', form)
    .then(res=>{
      setMessage(res.data.message)
      /* hide form after save */
      setForm({})
      /* hide errors after save */
      setErrors({})
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  /* delete */
  const OnDelete = async (id__)=>{
    if(window.confirm("are you sure to delete this event")){
 
      axios.delete(`http://localhost:3002/delevent/${id__}`)
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
    }
   } 

   if(request_result.isLoading)
    return <h1>Loading ! </h1>
    if(request_result.err)
    return <h1>error: {JSON.stringify(request_result.err)} </h1>
    return (
        <div className="row p-4">
          <Alert message={message} show={show}/>
          <div className="mt-4">
            <h2>Admin Dashboard</h2>
          </div>
          <div className="col-12 col-lg-4">
            <form onSubmit={onSubmitHandler}>
              <InputGroup
                label="EventName"
                type="text"
                name="EventName"
                onChangeHandler={onChangeHandler}
                errors={errors.EventName}
              />
              <InputGroup
                label="Organisateur"
                type="text"
                name="Organisateur"
                onChangeHandler={onChangeHandler}
                errors={errors.Organisateur}
              />
              <InputGroup
                label="Date"
                type="text"
                name="Date"
                onChangeHandler={onChangeHandler}
                errors={errors.Date}
              />
              <InputGroup
                label="Description"
                type="text"
                name="Description"
                onChangeHandler={onChangeHandler}
                errors={errors.Description}
              />
               <InputGroup
                label="Image"  
                type="text"
                name="Image"
                onChangeHandler={onChangeHandler}
                errors={errors.Image}
              />
              <button className="btn btn-primary" type="submit">Add event</button>
            </form>
          </div>
          <div className="col-12 col-lg-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">EventName</th>
                  <th scope="col">Organisateur</th>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Image</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events && events.map(({ EventName, Organisateur, Date, Description, Image, _id }) => (
                  <RowDetails
                    EventName={EventName}
                    Organisateur={Organisateur}
                    Date={Date}
                    Description={Description}
                    Image={Image}
                    Id={_id} 
                    OnDelete={OnDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

export default Home
