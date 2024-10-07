import React, { ReactNode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './layout.module.css'

interface Args {
    header: ReactNode
    main: ReactNode
    side: ReactNode
    footer: ReactNode
    sideOpen: boolean
    footerOpen: boolean
}

export const Layout = (a: Args) => {
    console.log(a.sideOpen)
    return (
        <div className={styles.layout}>
            <div className={styles.header}>{a.header}</div>
            <div className={styles.content}>
                <div className={styles.maincontainer}>
                    <div className={styles.main}>{a.main}</div>
                    <div
                        className={`${styles.footer} ${
                            a.footerOpen ? styles.footeropen : ''
                        }`}
                    >
                        {a.footer}
                    </div>
                </div>
                <div
                    className={`${styles.side} ${
                        a.sideOpen ? styles.sideopen : ''
                    }`}
                >
                    {a.side}
                </div>
            </div>
        </div>
    )
}
