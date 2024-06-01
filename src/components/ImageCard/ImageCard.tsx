import css from './ImageCard.module.css';
import { ImageObj, ImageForModal } from '../interfaces';

type Props = {
  item: ImageObj;
  openModal: (data: ImageForModal) => void;
};

export default function ImageCard({ item, openModal }: Props) {
    const handleClick = () => {
    const modalData: ImageForModal = {
        urls: {
            regular: item.urls.regular,
        },
    };
    openModal(modalData);
  };

    return (
        <div className={css.card}>
            <div className={css.img} onClick={()=> handleClick}>
                <img src={item.urls.small} alt={item.alt_description} />
            </div>
            
            <div className={css.information}>
                <p>likes: <span>{item.likes}</span></p>
                <p>author: <span>{item.user.name}</span></p>
                <p className={css.description}>{item.description}</p>
            </div>
        </div>
    );
};