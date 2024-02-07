
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messageskAtom, networkAtom, notificationsAtom, totalNotCount } from './atoms'
//RecoilRoot

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>


}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const finalValue = networkNotificationCount < 99 ? networkNotificationCount : "99+"

  const jobsCount = useRecoilValue(jobsAtom)
  const notificationCount = useRecoilValue(notificationsAtom)
  const [messageCount, setMessageCount] = useRecoilState(messageskAtom)
  const totalNotifCount = useRecoilValue(totalNotCount)


  return (
    <>
      <button>Home</button>

      <button>My network ({finalValue})</button>
      <button>Jobs ({jobsCount}) </button>
      <button>Messsages ({messageCount})</button>
      <button>Notifications ({notificationCount})</button>
      <br></br>
      <button onClick={() => {
        setMessageCount(messageCount + 1)
      }}>MEEEE ({totalNotifCount})</button>

    </>
  )
}


export default App
