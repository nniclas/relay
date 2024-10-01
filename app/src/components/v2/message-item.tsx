import React from 'react'
import { useState } from 'react'
import { Message } from '../../types/message'
import { AnimatePresence, motion } from 'framer-motion'

interface MessageArgs {
    message: Message
    color: string
    // sendMessage: (message: string) => void
}

const msgHeight = 48

export const MessageItem = (a: MessageArgs) => {
    return (
        <motion.div
            style={{
                height: msgHeight,
                minHeight: msgHeight,
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center',
                borderRadius: msgHeight,
                background: a.color,
            }}
            initial={{ y: -msgHeight * 2, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div
                style={{
                    flex: 1,
                    fontFamily: 'Afacad Flux',
                    fontSize: 16,
                    padding: '0 24px',
                    color: 'rgba(0,0,0,0.5)',
                }}
            >
                {a.message.text}
            </div>
        </motion.div>
    )
}
