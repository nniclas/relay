import React from 'react'
import { useState } from 'react'
import { Message } from '../../types/message'

interface MessageArgs {
    message: Message
    // sendMessage: (message: string) => void
}

export const MessageItem = (a: MessageArgs) => {
    return <h1 className='text-3xl font-bold underline'>Hellow message!</h1>
}
