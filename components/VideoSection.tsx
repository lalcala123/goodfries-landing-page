import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-[#D4AF37]">Mira Nuestro Producto en Accion</h2>
        <p className="text-gray-400 mb-12">Papas premium peruanas de la mejor calidad</p>
        
        <div className="flex justify-center">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/aYWXhbASlT0?autoplay=0&modestbranding=1&rel=0&showinfo=0&fs=0&controls=1"
            title="GOODFRIES - Papitas Premium"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
            style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;