import React, { ReactNode, useEffect, useRef } from 'react'
import { useState } from 'react'
import styles from './slider.module.css'

interface Args {
    items: ReactNode[]
}

export const Slider = (a: Args) => {
    return (
        <div className={styles.slider}>
            {a.items.map((item, i) => {
                return (
                    <div key={i} className={styles.item}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}
