import React,{Fragment,useEffect, useState} from 'react'
import { Form, Input } from 'reactstrap'
import { FormGroup } from 'reactstrap'
import { Container } from 'reactstrap'
import { Button } from 'reactstrap'
import axios from 'axios'
import base_url from '../api/bootapi'
import { toast } from 'react-toastify'
export const AddCourse = () => {
    useEffect(()=>{
        document.title = "Add Course";
    },[]);
    const [course,setCourse] = useState({});
    // from handler function
    const handleForm = (e)=>{
         console.log(course);
          postData(course);
         e.preventDefault();
    }
    // function to post data on server
    const postData=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                setCourse({id:"",title:"",description:""});
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");

            }
        )
    }
  return (
    <div>
        <h1 className='text-center font-weight-bold'>Fill course details</h1>
        <Fragment>
         <Form onSubmit={handleForm}>
            <FormGroup>
                <label htmlFor='userid'>Course Id</label>
                <Input type="text" placeholder='Enter here' name = "userid" id="userid" onChange={(e)=>{
                    setCourse({...course,id:e.target.value})
                }} />
            </FormGroup>
            <FormGroup>
                <label htmlFor='title'>Course title</label>
                <Input type="text" placeholder='Enter title here' name = "title" id="title" onChange={(e)=>{
                    setCourse({...course,title:e.target.value})}}/>
            </FormGroup>
            <FormGroup>
                <label htmlFor='description'>Course description</label>
                <Input type="textarea" placeholder='Enter description here' name = "description" id="description" style={{height:"150px"}} onChange={(e)=>{
                    setCourse({...course,description:e.target.value})}}/>
            </FormGroup>
            <Container className='text-center'>
                <Button type= "submit"color='success'>Add Course
                    </Button>
                <Button type='reset' color='warning ml-3'>Clear
                    </Button>
            </Container>
         </Form>
        </Fragment>
    </div>
  )
}
