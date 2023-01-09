import React, { useState,useEffect } from 'react'
import { Course } from './Course';
import axios  from 'axios';
import base_url from '../api/bootapi'
export const Courses = () => {

useEffect(()=>{
   document.title = "All Courses";
},[]);
// getting all courses
const getCoursesfromServer=()=>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
           console.log(response.data);
           setCourses(response.data);
        },
        (error)=>{
          console.log(error);
        }
    );
};
useEffect(()=>{
    getCoursesfromServer();
},[])


  const updateCourse=(id)=>{
    setCourses(courses.filter((c)=> c.id!=id));
  }
  const[courses,setCourses] = useState([  ]);
  return (
    <div>
          <h1>List of Courses:</h1>
          {
            courses.length>0?courses.map((item)=> <Course key={item.id} course = {item} update={updateCourse}/>) : "No course available"
          }
    </div>
  )
}
