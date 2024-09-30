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
                overflow: 'hidden',

                // background: 'rgba(0,0,0,0.2)',
            }}
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                style={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(0,40,0,0.2)',
                }}
                initial={{ x: -256 }}
                animate={{ x: [-256, -128, 0] }}
                exit={{ x: -256 }}
            >
                <div style={{ flex: 1 }}>Test {a.message.text}</div>
            </motion.div>
        </motion.div>
    )
}
