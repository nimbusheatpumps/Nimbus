import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-[60vh] md:min-h-[80vh] relative overflow-hidden rounded-b-3xl">
      <Image
        src="/images/worcester-bosch/Worcester_Bosch_8000_Front_1.jpg"
        fill
        className="object-cover object-center"
        alt="Worcester Bosch Boiler Installation"
        quality={95}
        sizes="(max-width: 768px) 100vw, 50vw"
        placeholder="blur"
        onError={() => {}}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight font-poppins">
            Premium Worcester Bosch Boilers from <span className="text-orange-400 text-4xl">£799</span>
          </h1>
          <p className="text-lg text-gray-200 italic mb-6 font-inter">
            Trusted by Bryan Whiteley in North Lincolnshire
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 text-xl md:text-2xl font-inter">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}