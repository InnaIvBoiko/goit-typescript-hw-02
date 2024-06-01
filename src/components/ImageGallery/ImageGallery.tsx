import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageObj, ImageForModal } from '../interfaces';

type Props = {
  items: ImageObj [];
  openModal: (data: ImageForModal) => void;
};
export default function ImageGallery({items, openModal}: Props) {
    return (
        <ul className={css.list}>
            {items.map((item) => (
                <li key={item.id}>
                   <ImageCard item={item} openModal={openModal}/>
                </li>
            ))}
        </ul>
    );
}