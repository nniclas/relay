import React from 'react'
import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

interface WaitingRoomArgs {
    joinChatRoom: (username: string, chatroom: string) => void
}

export const WaitingRoom = (a: WaitingRoomArgs) => {
    const [username, setUsername] = useState<string>()
    const [chatroom, setChatroom] = useState<string>()

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()

                if (username && chatroom) a.joinChatRoom(username, chatroom)
            }}
        >
            <Row className='px-5 py-5'>
                <Col sm={12}>
                    <Form.Group>
                        <Form.Control
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                        ></Form.Control>
                        <Form.Control
                            placeholder='ChatRoom'
                            onChange={(e) => setChatroom(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Col>
                <Col sm={12}>
                    <hr />
                    <Button variant='success' type='submit'>
                        Join
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
