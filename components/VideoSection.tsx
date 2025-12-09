import React from 'react';

const VideoSection: React.FC = () => {
  const videoId = 'aYWXhbASlT0';

  return (
    <section className="py-20 bg-[#0A0A0A]" id="video">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
            Mira Nuestro Producto en Acción
          </h2>
          <p className="text-lg text-gray-400">
            Papas premium peruanas de la mejor calidad
          </p>
        </div>

        {/* Reproductor de Video YouTube */}
        <div className="w-full bg-black rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&fs=1`}
            title="GoodFries - Mira Nuestro Producto en Acción"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;