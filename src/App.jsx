import { Header } from "./components/Header/Header"
import { Post } from "./Post"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Test"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eveniet repellendus delectus ad quo illo commodi, modi perferendis, inventore beatae pariatur ut veritatis? Porro ab illo obcaecati, quia corporis fugit."
      />
    </div>
  )
}

