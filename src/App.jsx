import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import { Sidebar } from "./components/Sidebar/Sidebar"

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Test"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eveniet repellendus delectus ad quo illo commodi, modi perferendis, inventore beatae pariatur ut veritatis? Porro ab illo obcaecati, quia corporis fugit."
          />
        </main>
      </div>
    </div>
  )
}

