import css from './ImageCard.module.css';

export default function ImageCard({ item: {
    urls: {
        small,
        regular,
    },
    alt_description,
    likes,
    description,
    user,
}, openModal}) {
    return (
        <div className={css.card}>
            <div className={css.img} onClick={()=> openModal(regular)}>
                <img src={small} alt={alt_description} />
            </div>
            
            <div className={css.information}>
                <p>likes: <span>{likes}</span></p>
                <p>author: <span>{user.name}</span></p>
                <p className={css.description}>{description}</p>
            </div>
        </div>
    );
}