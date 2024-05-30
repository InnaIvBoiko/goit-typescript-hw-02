import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({more}) {
    return (
        <>
        <button className={css.button} onClick={more}>Load more</button>
        </>
    );
}