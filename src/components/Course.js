import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from "reactstrap"
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
export const Course = ({course ,update }) => {
    
    const deleteCourse=(id)=>{
       axios.delete(`${base_url}/courses/${id}`).then(
        (response)=>{
              toast.success("course deleted successfully");
              update(id);
        },
        (error)=>{
            toast.error("server error");
        }
       );
    }
  return (
    
    <div>
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle className='font-weight-bold'>
                    {course.title} 
                </CardSubtitle>
                <CardText>
                    {course.description}
                </CardText>
                <Container >
                    <Button color='danger' onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color='warning' className='ml-3'>Update</Button>
                </Container>
            </CardBody>
        </Card>
    </div>
  )
}
