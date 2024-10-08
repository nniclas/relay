import React, { ReactNode, useEffect, useRef } from 'react'
import { useState } from 'react'
import { Message } from '../../types/message'
import { MessageItem } from './message-item'
import { ScrollLayout } from './layout/scroll-layout/scroll-layout'

interface MessageListArgs {
    // messages: Message[]
    messages: (Message & { color: string })[]
}

export const MessageList = (a: MessageListArgs) => {
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const c = container.current!
        // scroller?.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' })
        // !only updates dom, keeping only the latest top messages in scroller
        setTimeout(() => {
            const firstChild = c.getElementsByTagName('div')[0]
            if (c.childNodes.length > 8) {
                c.removeChild(firstChild)
                console.log(a.messages.length)
            }
        }, 250)
    }, [a])

    // const lastMessages = a.messages.slice(Math.max(a.messages.length - 5, 0))

    return (
        <div
            ref={container}
            style={{
                // display: 'flex',
                // flexDirection: 'column',
                gap: 8,
                // height: 400,
                // overflowY: 'scroll',
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
}

const content1 = (
    <div>
        Bacon ipsum dolor amet brisket ribeye pork shoulder doner beef cow
        bresaola ham hock capicola kevin pig. Pork loin rump capicola, fatback
        spare ribs prosciutto leberkas. Biltong drumstick sausage swine pig.
        Drumstick spare ribs meatball shoulder venison frankfurter, landjaeger
        kevin swine pork chicken. Ribeye cupim tongue, doner drumstick jowl
        meatloaf pork. Shoulder beef t-bone landjaeger ground round biltong.
        Pork belly spare ribs fatback venison. Pork loin jerky rump tail corned
        beef shankle tri-tip fatback picanha flank bacon sausage porchetta
        sirloin. Kevin turkey pastrami beef ribs, ribeye burgdoggen boudin
        capicola jerky salami shank. Corned beef turkey turducken strip steak.
        Fatback drumstick ham, doner jerky landjaeger flank shank turducken
        strip steak sausage filet mignon ball tip ham hock. Biltong frankfurter
        corned beef, jowl picanha chicken shank pork loin jerky. Turkey spare
        ribs biltong doner, short loin brisket boudin alcatra tri-tip pork ball
        tip. Salami pork chop cow ribeye, corned beef meatloaf spare ribs t-bone
        shoulder. Swine ham hock strip steak, drumstick rump shoulder pork
        chicken pork chop salami short loin beef ribs alcatra hamburger. Jowl
        doner tri-tip cow ham meatloaf prosciutto landjaeger ground round pork
        belly turkey venison. Tri-tip brisket filet mignon tongue. Sausage flank
        sirloin drumstick. Porchetta picanha frankfurter chuck, short loin pork
        belly jerky pork loin beef ribs prosciutto ball tip rump tail pig. Ham
        hock bresaola shoulder leberkas. Drumstick pork belly shank burgdoggen.
        Swine kielbasa beef ribs, brisket meatloaf shankle spare ribs. Alcatra
        shankle rump, ham hock tri-tip pancetta chuck andouille prosciutto pork
        loin short loin kevin. Jowl ham hock short ribs chicken. Tenderloin
        landjaeger strip steak, brisket doner pork belly ham hock. Sirloin rump
        pork loin pig, tail pork chop burgdoggen turkey ball tip short ribs
        prosciutto ham tri-tip pork porchetta. Jerky strip steak shoulder,
        fatback biltong pig bresaola tenderloin corned beef boudin ribeye beef.
    </div>
)

const content2 = (
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus
        quisquam, dignissimos assumenda ratione magnam impedit quod delectus,
        voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus
        quibusdam. Quam, officiis? Labore natus quisquam, dignissimos assumenda
        ratione magnam impedit quod delectus, voluptatum odio neque cupiditate
        rem porro blanditiis maxime doloribus quibusdam. Quam, officiis? Labore
        natus quisquam, dignissimos assumenda ratione magnam impedit quod
        delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime
        doloribus quibusdam. Quam, officiis?
    </div>
)
