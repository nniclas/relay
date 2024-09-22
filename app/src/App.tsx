import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import { WaitingRoom } from './components/waiting-room'
import {
    HubConnection,
    HubConnectionBuilder,
    LogLevel,
} from '@microsoft/signalr'
import { ChatRoom } from './components/chat-room'

function App() {
    const [conn, setConnection] = useState<HubConnection>()
    const [messages, setMessages] = useState<any[]>([])

    const joinChatRoom = async (username: string, chatroom: string) => {
        try {
            // initialize connection
            const connection = new HubConnectionBuilder()
                .withUrl('http://localhost:5214/chat')
                .configureLogging(LogLevel.Information)
                .build()

            // set up handler
            connection.on('ReceiveMessage', (username, message) => {
                setMessages((messages) => [...messages, { username, message }])
            })

            connection.on('ReceiveSpecificMessage', (username, message) => {
                setMessages((messages) => [...messages, { username, message }])

                console.log(message)
            })

            await connection.start()
            await connection.invoke('JoinChatRoom', { username, chatroom })

            setConnection(connection)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <main>
                <Container>
                    <Row class='px-5 mx-5'>
                        <Col sm='12'>
                            <h1 className='font-weight-light'>
                                Welcome to the Relay
                            </h1>
                        </Col>
                    </Row>
                    {!conn ? (
                        <WaitingRoom joinChatRoom={joinChatRoom} />
                    ) : (
                        <ChatRoom messages={messages} />
                    )}
                </Container>
            </main>
        </div>
    )
}

export default App
