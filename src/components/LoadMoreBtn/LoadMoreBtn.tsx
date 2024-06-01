import css from './LoadMoreBtn.module.css';

type Props = {
  more: () => void;
}

export default function LoadMoreBtn({ more }: Props) {
    return (
        <button className={css.button} onClick={more}>
            Load more
        </button>
    );
}