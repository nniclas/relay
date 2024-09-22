import React from 'react'
import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { MessageContainer } from './message-container'

interface ChatRoomArgs {
    messages: any[]
}

export const ChatRoom = (a: ChatRoomArgs) => {
    return (
        <div>
            <Row className='px-5 py-5'>
                <Col sm={10}>
                    <h2>ChatRoom</h2>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <MessageContainer messages={a.messages} />
                </Col>
            </Row>
        </div>
    )
}
