import React from 'react'
import { useState } from 'react'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'

interface MessageContainerArgs {
    messages: any[]
}

export const MessageContainer = (a: MessageContainerArgs) => {
    console.log(a.messages)

    return (
        <div>
            {a.messages.map((m, index) => {
                return (
                    <Table key={index} striped bordered>
                        <tr>
                            <td>
                                {m.message} - {m.username}
                            </td>
                        </tr>
                    </Table>
                )
            })}
        </div>
    )
}
