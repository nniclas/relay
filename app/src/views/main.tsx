import React, { useEffect, useMemo, useRef, useState } from 'react'
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
import { Message } from '../types/message'
import { ScrollLayout } from '../components/v2/layout/scroll-layout/scroll-layout'
import styles from './main.module.css'
import { Slider } from '../components/v2/layout/slider/slider'
import { SplitLayout } from '../components/v2/layout/split-layout/split-layout'
import { Layout } from './layout/layout'

const you = 'tom.cook@example.com'

export const Main = () => {
    // const [conn, setConnection] = useState<HubConnection>()
    // const [messages, setMessages] = useState<any[]>([])

    const [sideOpen, setSideOpen] = useState<boolean>(true)
    const [footerOpen, setFooterOpen] = useState<boolean>(true)

    // const count = useRef(0)
    const [messages, setMessages] = useState<(Message & { color: string })[]>(
        []
    )

    useEffect(() => {
        setTimeout(() => {
            setSideOpen(false)
        }, 1000)

        setTimeout(() => {
            setSideOpen(true)
        }, 2000)

        setTimeout(() => {
            setFooterOpen(false)
        }, 3000)

        setTimeout(() => {
            setFooterOpen(true)
        }, 4000)
    }, [])

    // const joinChatRoom = async (username: string, chatroom: string) => {
    //     try {
    //         // initialize connection
    //         const connection = new HubConnectionBuilder()
    //             .withUrl('http://localhost:5214/chat')
    //             .configureLogging(LogLevel.Information)
    //             .build()

    //         // set up handler
    //         connection.on('ReceiveMessage', (username, message) => {
    //             setMessages((messages) => [...messages, { username, message }])
    //         })

    //         connection.on('ReceiveSpecificMessage', (username, message) => {
    //             setMessages((messages) => [...messages, { username, message }])

    //             console.log(message)
    //         })

    //         await connection.start()
    //         await connection.invoke('JoinChatRoom', { username, chatroom })

    //         setConnection(connection)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    // const sendMessage = async (message: string) => {
    //     try {
    //         await conn?.invoke('SendMessage', message)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // const userItems = (
    //     <Slider
    //         items={testUsers.map((u, i) => (
    //             <div key={i} className={styles.useritem}>
    //                 {u.name.split('@')[0]}
    //             </div>
    //         ))}
    //     />
    // )

    const testHeader = (
        <div style={{ height: 64, background: 'orange' }}>HEADER</div>
    )

    const testMain = (
        <div style={{ flex: 1, background: 'lightgreen' }}>MAIN</div>
    )

    const testSide = (
        <div style={{ flex: 1, width: 64, background: 'red' }}>SIDE</div>
    )

    const testFooter = <div style={{ flex: 1, background: 'teal' }}>FOOTER</div>

    return (
        <Layout
            header={testHeader}
            main={testMain}
            side={testSide}
            footer={testFooter}
            sideOpen={sideOpen}
            footerOpen={footerOpen}
        />
    )

    return (
        <div className={styles.layout}>
            <div style={{ height: 100, background: 'teal' }}>header</div>

            {/* <SplitLayout side={testSide}>
                <div style={{ flex: 1, background: 'blue' }}></div>
            </SplitLayout> */}
            <SplitLayout side={testSide}>
                <div
                    className={styles.container}
                    onClick={() => {
                        const i = Math.round(Math.random() * 9)
                        const msgs = [...messages, testMessages[i]]
                        setMessages(msgs)
                    }}
                >
                    <ScrollLayout footer={testFooter} followEnd>
                        <MessageList messages={messages} />
                    </ScrollLayout>
                </div>
            </SplitLayout>
        </div>
    )
}

const testUsers: { name: string }[] = [
    {
        name: 'leslie.alexander@example.com',
    },
    {
        name: 'michael.foster@example.com',
    },
    {
        name: 'dries.vincent@example.com',
    },
    {
        name: 'tom.cook@example.com',
    },
]

const testMessages: (Message & { color: string })[] = [
    {
        user: 'leslie.alexander@example.com',
        date: '2023-01-23T13:23Z',
        text: 'tukiya mejipisi waruwe mejilawe wa tukiruwewapo bona siliwarumewetu',
        color: 'rgb(100,120,100)',
    },
    {
        user: 'michael.foster@example.com',
        date: '2023-01-23T13:23Z',
        text: 'niwelila jisi mejilawe tukiwe tubofeweru bona powafijipo wohujimepowepo naboru wani warumobohuruya, fekiweruweboni tukiweruwe kiwaniba wa tukibohusiwanipo wohulilamewerusi, wameme sikijiwemeposi bona mojibakituya mowen',
        color: 'rgb(120,120,100)',
    },
    {
        user: 'dries.vincent@example.com',
        date: '2023-01-23T13:23Z',
        text: 'tukiya mebolilasi',
        color: 'rgb(120,100,120)',
    },
    {
        user: 'lindsay.walton@example.com',
        date: '2023-01-23T13:23Z',
        text: 'waruwe mejilawe wa pijiweliwe bona wa pibomowe',
        color: 'rgb(120,120,120)',
    },
    {
        user: 'tom.cook@example.com',
        date: '2023-01-23T13:23Z',
        text: 'fekiweruweboni',
        color: 'rgb(100,100,120)',
        out: true,
    },
    {
        user: 'courtney.henry@example.com',
        date: '2023-01-23T13:23Z',
        text: 'tuwemopimewesi waruwe mejilawe wa pijiweliwe bona wa pibomowe-baruwaniwatuwe fejitukijini tukiya mebolilasi',
        color: 'rgb(120,100,100)',
    },
    {
        user: 'tom.cook@example.com',
        date: '2023-01-23T13:23Z',
        text: 'pijiweliwe bona wa pibomowe',
        color: 'rgb(100,100,120)',
        out: true,
    },
    {
        user: 'dries.vincent@example.com',
        date: '2023-01-23T13:23Z',
        text: 'wa',
        color: 'rgb(120,100,120)',
    },
    {
        user: 'leslie.alexander@example.com',
        date: '2023-01-23T13:23Z',
        text: 'tuwemopimewesi waruwe mejilawe wa pijiweliwe',
        color: 'rgb(100,120,100)',
    },
    {
        user: 'courtney.henry@example.com',
        date: '2023-01-23T13:23Z',
        text: 'mejilawe wa pijiweliwe',
        color: 'rgb(120,100,100)',
    },
]

// const testMessages:Message[] = [
//     {
//         user: 'leslie.alexander@example.com',
//         date: '2023-01-23T13:23Z',
//         text: 'leslie.alexander@example.com',
//         imageUrl:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',

//     },
//     {
//         name: 'Michael Foster',
//         email: 'michael.foster@example.com',
//         role: 'Co-Founder / CTO',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//         name: 'Dries Vincent',
//         email: 'dries.vincent@example.com',
//         role: 'Business Relations',
//         imageUrl:
//             'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: null,
//     },
//     {
//         name: 'Lindsay Walton',
//         email: 'lindsay.walton@example.com',
//         role: 'Front-end Developer',
//         imageUrl:
//             'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//         name: 'Tom Cook',
//         email: 'tom.cook@example.com',
//         role: 'Director of Product',
//         imageUrl:
//             'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: null,
//     },
//     {
//         name: 'Courtney Henry',
//         email: 'courtney.henry@example.com',
//         role: 'Designer',
//         imageUrl:
//             'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
// ]
