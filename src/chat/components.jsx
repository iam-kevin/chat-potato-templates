import { useEffect, useRef } from "react"
import { useChatUser, useMessage, useMessages } from "react-chat-potato/dist/utils/chat"

import { defaultUnknownUser, selfUser } from "./data"
import { getInitials } from "./utils"


export function MessageCanvasWrapper({ children }) {
    const messageCanvasRef = useRef(null)
    const _messages = useMessages()

    useEffect(() => {
        if (messageCanvasRef === null) {
            throw new Error("message canvas not rendered")
        }
        
        // scrolls to the bottom of the texts
        const scroll = messageCanvasRef.current.scrollHeight - messageCanvasRef.current.clientHeight;
        messageCanvasRef.current.scrollTo(0, scroll);
    }, [_messages])


    return (
        <div className="bg-gray-100 h-96 relative overflow-y-auto py-2 flex flex-col justify-between" ref={messageCanvasRef}>
            <div>
                {children}
            </div>
        </div>
    )
}

function Avatar({ name, image, className, color }) {
    return (
        image !== undefined ? (
            <img className={`inline rounded-full ${className}`} src={image} alt={`${name} profile`} />
        ) : (
            <span className={`inline-flex items-center justify-center ${className} rounded-full border-2 ${color === undefined ? 'bg-yellow-700 border-yellow-800' : null}`} style={{ backgroundColor: color, borderColor: "#000" }}>
              <span className="text-base font-medium leading-none text-white">{getInitials(name)}</span>
            </span>
        )
    )
}

/**
 * Designing for creating the message bubble
 */
function BaseMessage({ user, children, self }) {
    const isYourMessage = Boolean(self)
    return (
        <div className={`py-2 px-4 flex ${ isYourMessage ? 'flex-row-reverse': 'flex-row'} items-start`}>
            { !isYourMessage ?  (<Avatar name={user.name} className={`h-5 w-5 p-5 mr-2`} color={user.color} />) : null }
            <div className={`px-4 py-2 rounded-xl max-w-sm bg-white shadow-sm`}>
                <label className="text-xs font-semibold text-gray-500">{user.name}</label>
                {children}
            </div>
        </div>
    )
}

/**
 * Message component that are used in rendering in the component screen
 */
export function Message({ messageId }) {
    const message = useMessage(messageId)
    const user = useChatUser(message.user, selfUser, defaultUnknownUser)
    
    // check the 
    return (
        <BaseMessage user={user} self={message.user === "self"}>
            <p className="w-full" style={{ hyphens: 'manual' }}>{message.input.data}</p>
        </BaseMessage>
    )
}

