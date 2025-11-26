'use client';

import { useEffect } from 'react';

const ImagePreloader: React.FC = () => {
  useEffect(() => {
    // List of all images to preload
    const imagesToPreload = [
      '/images/about.jpg',
      '/images/pricing.jpg',
      '/images/curriculum.jpg',
      '/images/contact.jpg',
      '/images/home.jpg',
      '/images/blog.jpg',
      '/images/blogOpen.jpg',
      '/images/11+.jpg',
      '/images/naplan.jpg',
      '/images/ST.jpg',
      '/images/Hero2.jpg',
      '/images/HIW.jpg',
      '/images/Booking.jpg',
    ];

    // Preload all images immediately when component mounts
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      // Set high priority for faster loading
      if ('fetchPriority' in img) {
        (img as any).fetchPriority = 'high';
      }
    });
  }, []); // Empty dependency array means this runs once on mount

  return null;
};

export default ImagePreloader;

