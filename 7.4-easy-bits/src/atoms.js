import {atom, selector} from "recoil"

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 3
})

export const notificationsAtom = atom({
    key: "notificationAtom",
    default: 7
})

export const messageskAtom = atom({
    key: "messagesAtom",
    default: 0
})


export const totalNotCount = selector({
    key: "totalNotificationCount",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagesAtomCount = get(messageskAtom);
        const notificationAtomCount = get(notificationsAtom)

        return networkAtomCount + jobsAtomCount + messagesAtomCount + notificationAtomCount
    }
})