import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import './global.css';
import styles from './App.module.css';

import { posts } from "@/posts.json";
import { users } from "@/users.json";

export function App() {
  const activeUser = users.find(user => user.active = true);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar activeUser={activeUser} />
        <main>
          {posts.map(post => {
            const user = users.find(user => user.id === post.author.user_id);
            
            if (!user) {
              return null;
            }

            return (
              <Post 
                key={post.id}
                author={user}
                post={post}
                users={users}
              />
            );
          })}
          
        </main>
      </div>
    </div>
  )
}

