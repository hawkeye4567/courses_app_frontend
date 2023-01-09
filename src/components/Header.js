
import React from 'react'
import { Card } from 'reactstrap'
import { CardBody } from 'reactstrap'

export const Header = () => {
  return (
    <div>
        <Card className='my-2 bg-secondary'>
            <CardBody>
                <h1 className='text-center my-2'>Welcome to courses application</h1>
            </CardBody>
        </Card>
    </div>
  )
}
