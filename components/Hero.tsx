import { useState } from 'react';
import Image from 'next/image';
import BoilerQuoteForm from './BoilerQuoteForm';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="min-h-[60vh] md:min-h-[80vh] relative overflow-hidden rounded-b-3xl">
        <Image
          src="/images/worcester-bosch/iStock-2211126281-scaled.jpg"
          fill
          className="object-cover object-center"
          alt="Worcester Bosch Boiler Installation"
          quality={95}
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight font-poppins drop-shadow-lg">
              Worcester Bosch Boiler Installation North Lincolnshire
            </h1>
            <p className="text-lg md:text-xl text-gray-200 italic mb-6 drop-shadow-lg">
              Gas Safe 966812 • Next-Day Fitting • Fixed Prices from <span className="text-orange-500 text-6xl drop-shadow-lg">£1,790</span>
            </p>
            <button
              onClick={() => { console.log("Quote button clicked"); setIsOpen(true); }}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-xl md:text-2xl drop-shadow-lg"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </section>
      {isOpen && <BoilerQuoteForm onClose={() => setIsOpen(false)} />}
    </>
  );
}