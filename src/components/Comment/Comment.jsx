import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar 
                src="https://images.unsplash.com/photo-1702478553542-3aa3c0148543?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                hasBorder={false}
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lily Schumer</strong>
                            <time 
                                className={styles.publishTime}
                                title="18 July at 03:30 PM" 
                                dateTime="2024-07-18 03:30:00">Published 1 hour ago
                            </time>
                        </div>
                        <button title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Yeah! Welcome!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
