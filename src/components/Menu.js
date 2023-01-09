import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const Menu = () => {
  return (
    <ListGroup>
        <Link className='list-group-item list-group-item-action' tag="a" to='/' action>
         Home
        </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to='/addcourses' action>
         Add Courses
        </Link>
        <Link  className='list-group-item list-group-item-action'tag="a" to='/allcourses' action>
         View Courses
        </Link>
        <Link  className='list-group-item list-group-item-action'tag="a" to='#' action>
         About 
        </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to='#' action>
         Contact 
        </Link>
    </ListGroup>
  )
}
