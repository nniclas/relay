export interface Message {
    user: string
    date: string
    text: string
    out?: boolean // if you typed / not an incoming message
}
