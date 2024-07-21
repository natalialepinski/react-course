import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';

export function Post({ author, post, users }) {
    const comments = post.comments || [];
    const publishedAt = new Date(post.publishedAt);
    const publishedDateTitle = format(publishedAt, "d LLLL yyyy 'at' HH:mm")
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatar_url}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time 
                    className={styles.publishTime}
                    title={publishedDateTitle} 
                    dateTime={post.publishedAt}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            
            <div 
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

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
                {comments.map(comment => {
                    const user = users.find(user => user.id === comment.user_id);

                    if (!user) {
                        return null;
                    }
                    
                    return (
                        <Comment 
                            key={comment.id}
                            user={user}
                            comment={comment}
                        />
                    );
                })}

            </div>
        </article>
    );
}