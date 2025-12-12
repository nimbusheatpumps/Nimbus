import Image from 'next/image';

export default function Hero() {
  return (
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-poppins">
            Premium Worcester Bosch Boilers from <span className="text-orange-500 text-3xl md:text-5xl font-bold">£799</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 italic mb-6">
            Trusted by Bryan Whiteley in North Lincolnshire
          </p>
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-xl md:text-2xl">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}