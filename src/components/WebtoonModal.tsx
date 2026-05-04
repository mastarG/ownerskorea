import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './WebtoonModal.css';

// Import images
import webtoon1 from '../assets/webtoon/webtoon-1.png';
import webtoon2 from '../assets/webtoon/webtoon-2.png';
import webtoon3 from '../assets/webtoon/webtoon-3.png';

interface WebtoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WebtoonModal: React.FC<WebtoonModalProps> = ({ isOpen, onClose }) => {
  const images = [webtoon1, webtoon2, webtoon3];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="webtoon-modal-overlay" onClick={onClose}>
      <div className="webtoon-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="webtoon-close-btn" onClick={onClose}>
          <X size={32} />
        </button>

        <div className="webtoon-viewer">
          <button 
            className={`webtoon-nav-btn prev ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={48} />
          </button>

          <div className="webtoon-image-container">
            <img 
              src={images[currentIndex]} 
              alt={`Webtoon Page ${currentIndex + 1}`} 
              className="webtoon-image"
            />
            <div className="webtoon-pagination">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <button 
            className={`webtoon-nav-btn next ${currentIndex === images.length - 1 ? 'disabled' : ''}`}
            onClick={nextSlide}
            disabled={currentIndex === images.length - 1}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebtoonModal;
