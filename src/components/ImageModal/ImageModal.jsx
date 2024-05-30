import css from './ImageModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function ImageModal({onOpen, onClose, src}) {
    return (
        <Modal
            isOpen={onOpen}
            onRequestClose={onClose}
            overlayClassName={css.overlay}
            className={css.content}
        >
            <img className={css.photo} src={src} alt="some photo"/>
        </Modal>
    );
}