import React, { ReactNode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './layout.module.css'

interface Args {
    header: ReactNode
    main: ReactNode
    side: ReactNode
    footer: ReactNode
}

export const Layout = (a: Args) => {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>{a.header}</div>
            <div className={styles.content}>
                <div className={styles.maincontainer}>
                    <div className={styles.main}>{a.main}</div>
                    <div className={styles.footer}>{a.footer}</div>
                </div>
                <div className={styles.side}>{a.side}</div>
            </div>
        </div>
    )
}
