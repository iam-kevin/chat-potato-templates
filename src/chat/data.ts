
/**
 * Structure of the user -> me (the person typing)
 */
 export const selfUser = { name: "Me" }

 /**
  * Structure of the message of an anonymous user (user that is not described in the globalContext)
  */
export const defaultUnknownUser = { name: "Anonymous" }


export const globalChatContext = {
    dateTime: Date.now(),
    users: {
        'self': null,
        'mary': { 
            name: "Mary",
            color: "blue"
        },
        'kenny': { 
            name: "Kenny Rogers",
            color: "magenta"
        },
    }
}

