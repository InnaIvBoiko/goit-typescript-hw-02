import { useEffect, useState } from 'react';
import { fetchImages } from '../images-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import css from './App.module.css';
import { ImageObj, ImageForModal, Data } from '../interfaces';

export default function App() {
  const [images, setImages] = useState<ImageObj []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [regularSrc, setRegularSrc] = useState<ImageForModal>({
    urls: {
      regular: '',
    },
  });

  const handleModalOpen = (): void => {
    setModalIsOpen((prev) => !prev);
  };

  const openModal = (newRegularSrc: ImageForModal): void => {
    setRegularSrc(newRegularSrc);
    handleModalOpen();
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages() {
      try {
        setError(false);
        setIsLoading(true);
        const data: Data = await fetchImages(query, page);
        const results: ImageObj [] = data.results;
        setImages(prevImages => {
          return [...prevImages, ...results]
        });
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();

  }, [page, query]);

  return(
    <div className={css.container}>

      <SearchBar onSubmit={handleSearch} />

      { error ? <ErrorMessage /> : <ImageGallery items={images} openModal={openModal} /> }

      {isLoading && <Loader /> }

      {!isLoading && totalPages > page && <LoadMoreBtn more={handleLoadMore} />}

      <ImageModal
        onOpen={modalIsOpen}
        onClose={handleModalOpen}
        src={regularSrc}
      />
      
    </div>
  );
}