import React from 'react'
import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { MessageContainer } from './message-container'
import { SendMessageForm } from './send-message-form'

interface ChatRoomArgs {
    messages: any[]
    sendMessage: (message: string) => void
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
                <Col sm={12}>
                    <SendMessageForm sendMessage={a.sendMessage} />
                </Col>
            </Row>
        </div>
    )
}
