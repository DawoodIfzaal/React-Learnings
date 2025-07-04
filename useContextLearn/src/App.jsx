import './App.css'
import UserContextProvider from '../context/UserContextProvider'
import Login from '../components/Login'
import Profile from '../components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1>This is a useContext Project</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
