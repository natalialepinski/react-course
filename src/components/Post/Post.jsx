import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar
                        src="https://github.com/natalialepinski.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Natalia Lepinski</strong>
                        <span>Software Developer</span>
                    </div>
                </div>
                <time 
                    className={styles.publishTime}
                    title="18 July at 03:13 PM" 
                    dateTime="2024-07-18 03:13:00">Published 1 hour ago
                </time>
            </header>
            
            <div className={styles.content}>
                <p>
                    Hi All!
                </p>
                <p>
                    This is my first post!
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Write a comment</strong>
                <textarea 
                    placeholder='Write a comment here'
                />
                <footer>
                    <button type='submit'>Publish</button>
                </footer>
            </form>

            <div className={styles.comentList}>
                <Comment />
            </div>
        </article>
    );
}