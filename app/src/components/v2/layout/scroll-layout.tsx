import React, { ReactNode, useEffect, useRef } from 'react'
import { useState } from 'react'
import styles from './scroll-layout.module.css'

interface Args {
    children: ReactNode
    header?: ReactNode
    footer?: ReactNode

    followEnd?: boolean // scroll to end on content change
}

export const ScrollLayout = (a: Args) => {
    const scrollcontainer = useRef<HTMLDivElement>(null)

    if (a.followEnd) {
        useEffect(() => {
            const scroller = scrollcontainer.current!
            scroller?.scrollTo({
                top: scroller.scrollHeight,
                behavior: 'smooth',
            })
        }, [a])
    }

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.content}>{a.footer}</div>
                <div ref={scrollcontainer} className={styles.scrollcontent}>
                    {a.children}
                </div>
                <div className={styles.content}>{a.footer}</div>
                <div className={styles.testpart123}>
                    <div className={styles.testpart123testcontent} />
                </div>
            </div>
        </div>
    )
}
