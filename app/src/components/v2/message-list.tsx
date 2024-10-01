import React, { ReactNode, useEffect, useRef } from 'react'
import { useState } from 'react'
import { Message } from '../../types/message'
import { MessageItem } from './message-item'

interface MessageListArgs {
    // messages: Message[]
    messages: (Message & { color: string })[]
}

export const MessageList = (a: MessageListArgs) => {
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scroller = container.current!
        scroller?.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' })
    }, [a])

    return (
        <div
            ref={container}
            style={{
                // display: 'flex',
                // flexDirection: 'column',
                gap: 8,
                height: 400,
                overflowY: 'scroll',
                padding: 32,
            }}
        >
            {a.messages.map((m, i) => {
                return <MessageItem message={m} color={m.color} key={i} />
            })}
        </div>
    )

    // return (
    //     <motion.div
    //         layout
    //         layoutId={'list'}
    //         className='list-container'
    //         style={{ display: 'flex', flexDirection: 'column', width: 200 }}
    //     >
    //         <AnimatePresence mode='sync'>
    //             {a.messages.map((m, i) => {
    //                 return <MessageItem message={m} key={i} />
    //             })}
    //         </AnimatePresence>
    //     </motion.div>
    // )

    // return (
    //     <ul role='list' className='divide-y divide-gray-100'>
    //         {a.messages.map((m) => (
    //             <li key={m.email} className='flex justify-between gap-x-6 py-5'>
    //                 <div className='flex min-w-0 gap-x-4'>
    //                     <img
    //                         alt=''
    //                         src={m.imageUrl}
    //                         className='h-12 w-12 flex-none rounded-full bg-gray-50'
    //                     />
    //                     <div className='min-w-0 flex-auto'>
    //                         <p className='text-sm font-semibold leading-6 text-gray-900'>
    //                             {m.name}
    //                         </p>
    //                         <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
    //                             {m.email}
    //                         </p>
    //                     </div>
    //                 </div>
    //                 <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
    //                     <p className='text-sm leading-6 text-gray-900'>
    //                         {m.role}
    //                     </p>
    //                     {m.lastSeen ? (
    //                         <p className='mt-1 text-xs leading-5 text-gray-500'>
    //                             Last seen{' '}
    //                             <time dateTime={m.lastSeenDateTime}>
    //                                 {m.lastSeen}
    //                             </time>
    //                         </p>
    //                     ) : (
    //                         <div className='mt-1 flex items-center gap-x-1.5'>
    //                             <div className='flex-none rounded-full bg-emerald-500/20 p-1'>
    //                                 <div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
    //                             </div>
    //                             <p className='text-xs leading-5 text-gray-500'>
    //                                 Online
    //                             </p>
    //                         </div>
    //                     )}
    //                 </div>
    //             </li>
    //         ))}
    //     </ul>
    //)
}
