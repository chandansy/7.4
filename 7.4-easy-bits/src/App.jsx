
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { networkAtom, totalNotCount } from './atoms'
//RecoilRoot

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>


}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom.network)
  const finalValue = networkNotificationCount < 99 ? networkNotificationCount : "99+"

  const jobsCount = useRecoilValue(networkAtom)
  const notificationCount = useRecoilValue(networkAtom)
  const [messageCount, setMessageCount] = useRecoilState(networkAtom)
  const totalNotifCount = useRecoilValue(totalNotCount)


  return (
    <>
      <button>Home</button>

      <button>My network ({finalValue.network})</button>
      <button>Jobs ({jobsCount.jobs}) </button>
      <button>Messsages ({messageCount.messaging})</button>
      <button>Notifications ({notificationCount.notifications})</button>
      <br></br>
      <button onClick={() => {
        setMessageCount(messageCount + 1)
      }}>MEEEE ({totalNotifCount})</button>

    </>
  )
}


export default App
