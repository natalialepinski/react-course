import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ user, comment }) {
    return (
        <div className={styles.comment}>
            <Avatar 
                src={user.avatar_url} 
                hasBorder={false}
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{user.name}</strong>
                            {/* <time 
                                className={styles.publishTime}
                                title="18 July at 03:30 PM" 
                                dateTime="2024-07-18 03:30:00">Published 1 hour ago
                            </time> */}
                        </div>
                        <button title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <span 
                        dangerouslySetInnerHTML={{ __html: comment.content }} 
                    />
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>{comment.likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
