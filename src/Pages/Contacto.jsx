import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Contacto() {
  return (
    <Form className='p-5 m-5 text-center'>
        <h1>Cuentanos, ¿en que te podemos ayudar? </h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={8} />
      </Form.Group>
    <Button variant="danger" type="submit">
      Enviar
    </Button>
  </Form>
  )
}
