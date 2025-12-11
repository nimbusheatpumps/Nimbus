import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function LocationPage() {
  const router = useRouter();
  const { slug } = router.query;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const buttonVariants = {
    ...itemVariants,
    hover: { y: -5, transition: { duration: 0.2 } }
  };

  // Town-specific data
  const townData = {
    scunthorpe: {
      name: 'Scunthorpe',
      image: '/images/scunthorpe-bg.jpg', // Placeholder
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.123456789012!2d-0.654321!3d53.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878b1234567890a%3A0x1234567890abcdef!2sScunthorpe!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk'
    },
    lincoln: {
      name: 'Lincoln',
      image: '/images/lincoln-bg.jpg', // Placeholder
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.123456789012!2d-0.543210!3d53.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878a1234567890b%3A0x1234567890abcdef!2sLincoln!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk'
    },
    hull: {
      name: 'Hull',
      image: '/images/hull-bg.jpg', // Placeholder
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.123456789012!2d-0.345678!3d53.745678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879b1234567890c%3A0x1234567890abcdef!2sHull!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk'
    }
  };

  const data = townData[slug as keyof typeof townData] || townData.scunthorpe;

  return (
    <>
      <motion.div className="section relative min-h-screen flex items-center justify-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <Image
          src={data.image}
          fill={true}
          priority={true}
          quality={95}
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
          alt={`${data.name} location`}
          className="absolute inset-0 object-cover"
          onError={() => {}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 to-blue-900/80"></div>
        <motion.div
          className="text-center relative z-10 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-poppins text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Boiler Services in <span className="text-orange-400">{data.name}</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-200 mb-8"
          >
            Professional heating solutions by Bryan Whiteley
          </motion.p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 px-12 sm:py-4 sm:px-10 rounded-lg text-xl transition-colors"
          >
            Get Quote
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Map Section */}
      <motion.div className="section py-16 bg-gray-50" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-900">Find Us in {data.name}</h2>
          <div className="max-w-4xl mx-auto">
            <iframe
              src={data.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </>
  );
}