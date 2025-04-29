import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageHero } from '../components/PageHero';
import { ZoomIn, ZoomOut, X, Share2, Copy, Download, ImageIcon } from 'lucide-react';

// Import all images from assets folder
import img1 from '../assests/WhatsApp Image 2025-04-29 at 21.00.48_56c416d6.jpg';
import img2 from '../assests/WhatsApp Image 2025-04-29 at 21.00.48_0b860a9d.jpg';
import img3 from '../assests/WhatsApp Image 2025-04-29 at 21.00.48_5b2fbdf4.jpg';
import img4 from '../assests/IMG-20250429-WA0013.jpg';
import img5 from '../assests/IMG-20250429-WA0012.jpg';
import img6 from '../assests/IMG-20250429-WA0011.jpg';
import img7 from '../assests/IMG-20250429-WA0010.jpg';
import img8 from '../assests/IMG-20250429-WA0009.jpg';
import img9 from '../assests/IMG-20250429-WA0008.jpg';
import img10 from '../assests/IMG-20250429-WA0007.jpg';
import img11 from '../assests/IMG-20250429-WA0006.jpg';
import img12 from '../assests/WhatsApp Image 2025-04-29 at 21.00.41_5a7540a3.jpg';
import img13 from '../assests/IMG-20250429-WA0004.jpg';
import img14 from '../assests/IMG-20250429-WA0003.jpg';
import img15 from '../assests/WhatsApp Image 2025-04-29 at 21.00.42_ea010713.jpg';
import img16 from '../assests/IMG-20250429-WA0002.jpg';
import img17 from '../assests/WhatsApp Image 2025-04-29 at 21.00.41_2bc21f8c.jpg';
import img18 from '../assests/IMG-20250429-WA0001.jpg';
import img19 from '../assests/WhatsApp Image 2025-04-29 at 21.00.42_2d901f32.jpg';

// Lazy load image component
const LazyImage = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only set up the observer if we haven't loaded yet
    if (!isLoaded && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { 
          rootMargin: '200px', // Start loading when image is within 200px of viewport
          threshold: 0.01 
        }
      );
      
      observer.observe(imgRef.current);
      
      return () => {
        if (imgRef.current) observer.disconnect();
      };
    }
  }, [isLoaded]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
      }}
    >
      {/* Show a skeleton loader until the image is loaded */}
      {(!isLoaded || !isInView) && (
        <div className="flex flex-col items-center justify-center text-gray-400">
          <ImageIcon size={32} className="mb-2 animate-pulse" />
          <span className="text-xs">Loading...</span>
        </div>
      )}
      
      {/* Only render the image if it's in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in'
          }}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      )}
    </div>
  );
};

const Gallery = () => {
  // Gallery images array using the imported images
  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19
  ];

  // State for modal and zoom functionality
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [shareTooltip, setShareTooltip] = useState('');
  const [modalImage, setModalImage] = useState<string | null>(null);
  
  // Function to handle image click for larger view
  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setZoomLevel(1); // Reset zoom when opening a new image
    // Preload the full-size image
    setModalImage(galleryImages[index]);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedImage(null);
    // Clear the modal image after animation completes
    setTimeout(() => setModalImage(null), 300);
  };

  // Function to handle zoom in
  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.25, 3)); // Max zoom 3x
  };

  // Function to handle zoom out
  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5)); // Min zoom 0.5x
  };

  // Function to share or copy the image URL
  const shareImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (selectedImage === null) return;
    
    // Create a share URL (in a real app, this would be a direct link to the image)
    const shareUrl = `${window.location.origin}/gallery?image=${selectedImage + 1}`;
    
    // Try to use the Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: 'MegaMinds Academy Gallery',
        text: 'Check out this photo from MegaMinds Academy!',
        url: shareUrl,
      })
      .catch(error => console.log('Error sharing:', error));
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          setShareTooltip('URL copied!');
          setTimeout(() => setShareTooltip(''), 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          setShareTooltip('Failed to copy');
          setTimeout(() => setShareTooltip(''), 2000);
        });
    }
  };

  return (
    <>
      <Header />
      <PageHero
        title="Our Gallery"
        description="Explore moments and memories from MegaMinds Academy through our collection of photos"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer relative"
                onClick={() => handleImageClick(index)}
                style={{ 
                  height: '280px',
                  position: 'relative',
                }}
              >
                {/* Blurred background image filling the container */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    filter: 'blur(10px) brightness(0.9)',
                    transform: 'scale(1.1)', // Slightly larger to avoid blur edges
                    zIndex: 1
                  }}
                >
                  {/* Hidden image to trigger lazy loading of background */}
                  <img src={image} alt="" style={{ display: 'none' }} loading="lazy" />
                </div>
                
                {/* Main image displayed on top with lazy loading */}
                <LazyImage 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Full-size image modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Image container with zoom */}
          <div 
            className="relative max-w-full max-h-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {modalImage ? (
              <img
                src={modalImage}
                alt={`Gallery image ${selectedImage + 1} fullsize`}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '80vh',
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.3s ease',
                  objectFit: 'contain'
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-white">
                <ImageIcon size={64} className="mb-4 animate-pulse" />
                <span>Loading image...</span>
              </div>
            )}
            
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            
            {/* Control panel */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 backdrop-blur rounded-full px-4 py-2 flex items-center gap-4">
              {/* Zoom controls */}
              <button
                className="text-white hover:text-yellow-300 transition-colors p-1"
                onClick={zoomOut}
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut size={20} className={zoomLevel <= 0.5 ? "opacity-50" : ""} />
              </button>
              
              <span className="text-white text-sm min-w-[3rem] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              
              <button
                className="text-white hover:text-yellow-300 transition-colors p-1"
                onClick={zoomIn}
                disabled={zoomLevel >= 3}
              >
                <ZoomIn size={20} className={zoomLevel >= 3 ? "opacity-50" : ""} />
              </button>
              
              {/* Divider */}
              <div className="w-px h-6 bg-white/30"></div>
              
              {/* Share button */}
              <div className="relative">
                <button
                  className="text-white hover:text-yellow-300 transition-colors p-1"
                  onClick={shareImage}
                >
                  <Share2 size={20} />
                </button>
                
                {/* Share tooltip */}
                {shareTooltip && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-darkBlue rounded whitespace-nowrap">
                    {shareTooltip}
                  </div>
                )}
              </div>
              
              {/* Download button */}
              <button
                className="text-white hover:text-yellow-300 transition-colors p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  // Create temporary anchor to download
                  const a = document.createElement('a');
                  a.href = galleryImages[selectedImage!];
                  a.download = `megaminds-gallery-${selectedImage! + 1}.jpg`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
              >
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default Gallery; 