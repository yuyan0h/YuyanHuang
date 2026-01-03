import React from 'react';
import { PHOTOGRAPHY_PROJECTS } from '../constants';

const Photography: React.FC = () => {
  const allImages = PHOTOGRAPHY_PROJECTS.flatMap(project => project.images);

  return (
    <div className="animate-fade-in">
        <div className="grid grid-cols-3 gap-4">
            {allImages.map((photo, idx) => (
                <div key={idx} className="group relative bg-white p-4 shadow-lg rounded-sm">
                    <img 
                        src={photo.src} 
                        alt={photo.caption || 'Photo'} 
                        className="w-full h-full object-cover aspect-[4/3] rounded-sm"
                        loading="lazy"
                    />
                    <div className="mt-2 text-center text-xs text-slate-600 font-medium">
                        {photo.caption}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Photography;