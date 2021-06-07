export function getInitials(name: string) {
    let tempName = name.trim()
    tempName = tempName.toUpperCase()

    const words = tempName.split(/\s+/)
    const lastIx = words.length - 1


    let initials =  words[0].charAt(0) 
    if (lastIx !== 0) {
        initials = initials + words[lastIx].charAt(0)
    }

    return initials
}
