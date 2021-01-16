import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Form, Col, Row } from 'react-bootstrap';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <Container>
      <Row className='justify-content-md-center my-4'>
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId='name'>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId='room'>
              <Form.Label>Room Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter room name'
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                required
              />
            </Form.Group>
            <Link to={`/chat?name=${name}&room=${room}`}>
              <Button
                variant='primary'
                type='submit'
                block
                disabled={!name || !room ? true : false}
                className='my-4'
              >
                Join
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Join;
