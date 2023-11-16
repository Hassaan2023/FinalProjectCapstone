// ArtGallery.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ArtObject {
  objectId: number;  // Change 'objectID' to 'objectId'
  primaryImage: string;
}

const ArtGallery: React.FC = () => {
  const [artObjects, setArtObjects] = useState<ArtObject[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste%20Renoir'
        );

        const objectIDs: number[] = response.data.objectIDs || [];

        // Fetch details for each object ID
        const objectsPromises = objectIDs.map(async (objectId: number) => {
          const objectDetails = await axios.get(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
          );
          return {
            objectId,  // Change 'objectID' to 'objectId'
            primaryImage: objectDetails.data.primaryImage || '',
          };
        });

        const objects = await Promise.all(objectsPromises);
        setArtObjects(objects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artObjects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, artObjects.length]);

  return (
    <div>
      {artObjects.length > 0 && (
        <img
          src={artObjects[currentImageIndex].primaryImage}
          alt={`Artwork ${currentImageIndex}`}
          style={{ maxWidth: '100%' }}
        />
      )}
    </div>
  );
};

export default ArtGallery;