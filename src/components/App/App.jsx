import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

import css from './App.module.css';
import { fetchImages } from '../images-api.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  // < ======================================= > 

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [regularSrc, setRegularSrc] = useState('');
  
  const openModal = (newRegularSrc) => {
    setModalIsOpen(true);
    setRegularSrc(newRegularSrc);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // < ======================================= >

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
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
        const data = await fetchImages(query, page);
        const results = data.results;
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
      
      {modalIsOpen && <ImageModal onOpen={openModal} onClose={closeModal} src={regularSrc} /> }
    </div>
  );
}