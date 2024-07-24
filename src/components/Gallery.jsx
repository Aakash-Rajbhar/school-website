import React from 'react';

const galleryItems = [
  {
    src: 'https://via.placeholder.com/600x400.png?text=Sports+Day',
    alt: 'Sports Day',
    caption: 'Students participating in various sports events.',
  },
  {
    src: 'https://via.placeholder.com/600x400.png?text=Science+Exhibition',
    alt: 'Science Exhibition',
    caption: 'Students presenting their science projects.',
  },
  {
    src: 'https://via.placeholder.com/600x400.png?text=Cultural+Fest',
    alt: 'Cultural Fest',
    caption: 'Students performing in the cultural fest.',
  },
  {
    src: 'https://via.placeholder.com/600x400.png?text=Classroom',
    alt: 'Classroom',
    caption: 'A glimpse of our interactive classrooms.',
  },
  {
    src: 'https://via.placeholder.com/600x400.png?text=Library',
    alt: 'Library',
    caption: 'Students reading and studying in the school library.',
  },
  {
    src: 'https://via.placeholder.com/600x400.png?text=School+Labs',
    alt: 'School Labs',
    caption: 'Students getting practical knowledge in Labs',
  },
  {
    src: 'https://via.placeholder.com/600x400.png?text=School+Tour',
    alt: 'School Tour',
    caption: 'Virtual tour of Springdale Public School.',
    isVideo: true,
  }
];

const Gallery = () => {
  return (
    <section className="p-8 bg-gray-100 mt-[70px]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Gallery</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Explore the vibrant life and events at Springdale Public School through our gallery. From exciting sports events to innovative science exhibitions, our gallery captures the essence of school life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through images */}
          {galleryItems.slice(0, 6).map((item, index) => (
            <div key={index} className="relative group">
              <img src={item.src} alt={item.alt} className="w-full h-64 md:h-80 lg:h-72 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white text-center py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm">{item.caption}</p>
              </div>
            </div>
          ))}
          {/* Video */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-3 group">
            <video src={galleryItems[6].src} controls className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white text-center py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-sm">{galleryItems[6].caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
