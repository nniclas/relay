import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import { WaitingRoom } from '../components/v1/waiting-room'
import {
    HubConnection,
    HubConnectionBuilder,
    LogLevel,
} from '@microsoft/signalr'
import { ChatRoom } from '../components/v1/chat-room'
import { MessageList } from '../components/v2/message-list'

export const Main = () => {
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

    const sendMessage = async (message: string) => {
        try {
            await conn?.invoke('SendMessage', message)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container>
            <MessageList messages={people} />
        </Container>
    )
}

const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]
