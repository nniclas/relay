import React from 'react'
import { useState } from 'react'
import { Button, Col, Form, InputGroup, Row, Table } from 'react-bootstrap'

interface SendMessageFormArgs {
    sendMessage: (message: string) => void
}

export const SendMessageForm = (a: SendMessageFormArgs) => {
    const [message, setMessage] = useState('')

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                a.sendMessage(message)
                setMessage('')
            }}
        >
            <InputGroup>
                <InputGroup.Text></InputGroup.Text>
                <Form.Control
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder='type a message'
                />
                <Button variant='primary' type='submit' disabled={!message}>
                    Send
                </Button>
            </InputGroup>
        </Form>
    )
}
