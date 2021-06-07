import { useCallback } from 'react'
import { PotatoChat, PotatoChatProvider } from 'react-chat-potato/dist'
import { useMessageUpdater } from 'react-chat-potato/dist/utils/chat'

import { Message, MessageCanvasWrapper } from './components'
import { ComposerBox, composerOptions } from './composers'
import { globalChatContext } from './data'


function ChatInterface() {
    const addToMessageList = useMessageUpdater()
    const sendAction = useCallback(async (input, composerType) => {
        addToMessageList(input)
    }, [addToMessageList])

    return (
        <div className="w-full my-8 border rounded-md shadow-sm">
            <PotatoChat
                initialComposer='text'
                composerOptions={composerOptions}
                messageComponent={Message}
                messageCanvasWrapper={MessageCanvasWrapper}
                composerBox={ComposerBox}
                sendAction={sendAction} />
        </div>        
    )
}

export default function Chat() {
    return (
        <PotatoChatProvider globalChatContext={globalChatContext}>
            <ChatInterface />
        </PotatoChatProvider>
    )
}
