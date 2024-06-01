import Modal from 'react-modal';
Modal.setAppElement('#root');
import { ImageForModal } from '../interfaces';
import css from './ImageModal.module.css';

type Props = {
    onOpen: boolean;
    onClose: () => void;
    src: ImageForModal;
};

export default function ImageModal({onOpen, onClose, src}: Props) {
    return (
        <Modal
            isOpen={onOpen}
            onRequestClose={onClose}
            overlayClassName={css.overlay}
            className={css.content}
        >
            <img className={css.photo} src={src.urls.regular} alt="some photo"/>
        </Modal>
    );
}