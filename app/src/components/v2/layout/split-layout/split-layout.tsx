import React, { ReactNode, useEffect, useRef } from 'react'
import { useState } from 'react'
import styles from './split-layout.module.css'

interface Args {
    children: ReactNode
    side: ReactNode
}

export const SplitLayout = (a: Args) => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.content}>{a.children}</div>
                <div className={styles.side}>{a.side}</div>
            </div>
        </div>
    )
}
