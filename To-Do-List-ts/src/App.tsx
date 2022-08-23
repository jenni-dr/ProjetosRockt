import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import styles from './App.module.css'

import './global.css'


function App() {
  return (
    <div>
    <Header/>
    <main className={styles.content}>
      <NewTask/>
    </main>
  </div>
  )
}

export default App
