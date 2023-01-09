import React,{useEffect} from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Button} from 'reactstrap'

export const Home = () => {
    useEffect(()=>{
        document.title = "Home";
    },[]);
  return (
       <div class="jumbotron text-center ">
            
            <h1 className= "display-3">Deep Learning of react</h1>
            <p> 
            Developed by Adarsh Srivastava for basic understanding of react
            </p>
            <div class="container">
                <Button color="primary" outline>Start Using</Button>
            </div>
        
    </div>

  )
}
