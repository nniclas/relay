import React from 'react'
import { useState } from 'react'
import { Message } from '../../types/message'
import { AnimatePresence, motion } from 'framer-motion'

interface MessageArgs {
    message: Message
    // sendMessage: (message: string) => void
}

export const MessageItem = (a: MessageArgs) => {
    return (
        <motion.div
            style={{
                height: 64,
                width: 256,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.2)',
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div style={{ flex: 0 }}>Test {a.message.text}</div>
        </motion.div>
    )
}
