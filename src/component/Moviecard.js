import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Moviecard({el}) {
  return (
    <div >
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      {el.description}
    </Card.Text>
    <Button variant="primary">Details</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Moviecard