import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/button';

const worcesterModels = [
  { name: 'Greenstar 8000 Style', image: '/images/worcester-bosch/Worcester_Bosch_8000_Style_Which_24_584x550.jpg', kW: '24-35' },
  { name: 'Greenstar 8000 Life', image: '/images/worcester-bosch/WorcesterGreenstar8000Life_white.png', kW: '24-35' },
  { name: 'Greenstar 4000', image: '/images/worcester-bosch/4000_Front_Facing.jpg', kW: '24-35' },
];

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email'),
  postcode: z.string().min(1, 'Postcode is required'),
  range: z.string().min(1, 'Range is required'),
  message: z.string().optional(),
  website: z.string().optional(), // honeypot
  kW: z.string().optional(),
  model: z.string().optional(),
  brand: z.string().min(1, 'Brand is required'),
});

type FormData = z.infer<typeof schema>;

interface BoilerQuoteFormProps {
  fullPage?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const BoilerQuoteForm: React.FC<BoilerQuoteFormProps> = ({ fullPage = false, isOpen: externalIsOpen, onClose: externalOnClose }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(!fullPage);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalOnClose || setInternalIsOpen;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [countdown, setCountdown] = useState(30);
  const [selectedKW, setSelectedKW] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setCountdown(30);
  }, [currentStep]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const closeModal = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const nextStep = () => {
    let valid = true;
    if (currentStep === 1) {
      if (!watch('name') || !watch('phone') || !watch('email') || errors.name || errors.phone || errors.email) valid = false;
    } else if (currentStep === 2) {
      if (!watch('postcode') || !watch('range') || !watch('brand') || errors.postcode || errors.range || errors.brand) valid = false;
      if (!fullPage && (!selectedKW || !selectedModel)) valid = false;
    }
    if (valid) setCurrentStep(currentStep + 1);
  };

  const onSubmit = async (data: FormData) => {
    // Check honeypot
    if (data.website) {
      // Spam detected, do nothing
      return;
    }

    setIsLoading(true);
    setError(null);

    data.kW = selectedKW;
    data.model = selectedModel;

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote');
      }

      setSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (fullPage) {
    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl xs:shadow-sm sm:shadow-md hover:shadow-xl shadow-[0_4px_6px_-1px_rgba(30,58,138,0.2)] p-8 max-w-4xl mx-auto"
      >
        <p className="text-red-600 font-bold animate-pulse mb-4 leading-1.5">3 slots left this week – £150 off if booked today</p>

        {success ? (
          <div className="text-center">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <p className="text-green-600 font-bold">Thank you! We’ll call you within 1 hour</p>
          </div>
        ) : (
          <form>
            {currentStep === 1 && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                />
                {errors.name && <p className="text-red-500 mb-2">{errors.name.message}</p>}

                <input
                  type="tel"
                  placeholder="Phone"
                  {...register('phone')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                />
                {errors.phone && <p className="text-red-500 mb-2">{errors.phone.message}</p>}

                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                />
                {errors.email && <p className="text-red-500 mb-2">{errors.email.message}</p>}
              </>
            )}

            {currentStep === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Postcode"
                  {...register('postcode')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                />
                {errors.postcode && <p className="text-red-500 mb-2">{errors.postcode.message}</p>}

                <select
                  {...register('range')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                >
                  <option value="">Select Range</option>
                  <option value="Combi">Combi</option>
                  <option value="System">System</option>
                  <option value="Regular">Regular</option>
                </select>
                {errors.range && <p className="text-red-500 mb-2">{errors.range.message}</p>}

                <select
                  {...register('brand')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                >
                  <option value="">Select Brand</option>
                  <option value="Worcester Bosch">Worcester Bosch</option>
                  <option value="Vaillant">Vaillant</option>
                  <option value="Viessmann">Viessmann</option>
                  <option value="Baxi">Baxi</option>
                  <option value="Ideal">Ideal</option>
                  <option value="Other">Other</option>
                </select>
                {errors.brand && <p className="text-red-500 mb-2">{errors.brand.message}</p>}
              </>
            )}

            {currentStep === 3 && (
              <>
                <textarea
                  placeholder="Message"
                  {...register('message')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                  rows={4}
                ></textarea>
              </>
            )}

            {/* Honeypot */}
            <input
              type="text"
              {...register('website')}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {error && <p className="text-red-500 mb-2">{error}</p>}

            <Button
              variant="orange"
              onClick={() => { if (currentStep === totalSteps) handleSubmit(onSubmit)(); else nextStep(); }}
              disabled={isLoading}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out w-full disabled:opacity-50"
            >
              {isLoading ? 'Submitting...' : currentStep === totalSteps ? 'Submit' : 'Next'}
            </Button>
          </form>
        )}
      </motion.div>
    );
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-900/20 to-blue-600/20 backdrop-blur-lg border border-white/20 rounded-3xl xs:shadow-sm sm:shadow-md hover:shadow-xl shadow-[0_4px_6px_-1px_rgba(30,58,138,0.2)] p-6 relative min-h-screen sm:min-h-0"
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl">×</button>

            <div className="bg-red-500 text-white text-center py-2 rounded-lg mb-4 animate-pulse">
              Fixed Price Guarantee - Limited Slots!
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 text-center font-inter leading-1.5">Get Your Fixed-Price Boiler Quote</h2>

            <div className="text-center text-white mb-4">
              <p className="text-sm leading-1.5">Get Your Quote in Seconds!</p>
              <p className="text-lg font-bold leading-1.5">{countdown}s</p>
            </div>

            <div className="w-full bg-white/20 rounded-full h-3 mb-6">
              <motion.div className="bg-orange-500 h-3 rounded-full" initial={{width: 0}} animate={{width: `${(currentStep / totalSteps) * 100}%`}} transition={{duration: 0.3}}></motion.div>
            </div>

            <p className="text-white text-center mb-4 leading-1.5">Boilers Installing Fast in Scunthorpe - Act Now!</p>

            {success ? (
              <div className="text-center">
                <div className="text-green-400 text-6xl mb-4">✓</div>
                <p className="text-green-400 font-bold">Thank you! We’ll call you within 1 hour</p>
              </div>
            ) : (
              <motion.form onSubmit={handleSubmit(onSubmit)} key={currentStep} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.3}}>
                {currentStep === 1 && (
                  <>
                    <input
                      type="text"
                      placeholder="Name"
                      {...register('name')}
                      className="rounded-lg border-white/30 bg-white/10 text-white placeholder-white/70 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter w-full mb-4"
                    />
                    {errors.name && <p className="text-red-300 mb-2">{errors.name.message}</p>}

                    <input
                      type="tel"
                      placeholder="Phone"
                      {...register('phone')}
                      className="rounded-lg border-white/30 bg-white/10 text-white placeholder-white/70 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter w-full mb-4"
                    />
                    {errors.phone && <p className="text-red-300 mb-2">{errors.phone.message}</p>}

                    <input
                      type="email"
                      placeholder="Email"
                      {...register('email')}
                      className="rounded-lg border-white/30 bg-white/10 text-white placeholder-white/70 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter w-full mb-4"
                    />
                    {errors.email && <p className="text-red-300 mb-2">{errors.email.message}</p>}
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <input
                      type="text"
                      placeholder="Postcode"
                      {...register('postcode')}
                      className="rounded-lg border-white/30 bg-white/10 text-white placeholder-white/70 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter w-full mb-4"
                    />
                    {errors.postcode && <p className="text-red-300 mb-2">{errors.postcode.message}</p>}

                    <select
                      {...register('range')}
                      className="rounded-lg border-white/30 bg-white/10 text-white placeholder-white/70 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter w-full mb-4"
                    >
                      <option value="">Select Boiler Type</option>
                      <option value="Combi">Combi</option>
                      <option value="System">System</option>
                      <option value="Regular">Regular</option>
                    </select>
                    {errors.range && <p className="text-red-300 mb-2">{errors.range.message}</p>}

                    <select
                      {...register('brand')}
                      className="rounded-lg border-white/30 bg-white/10 text-white placeholder-white/70 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter w-full mb-4"
                    >
                      <option value="">Select Brand</option>
                      <option value="Worcester Bosch">Worcester Bosch</option>
                      <option value="Vaillant">Vaillant</option>
                      <option value="Viessmann">Viessmann</option>
                      <option value="Baxi">Baxi</option>
                      <option value="Ideal">Ideal</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.brand && <p className="text-red-300 mb-2">{errors.brand.message}</p>}

                    <select
                      value={selectedKW}
                      onChange={(e) => setSelectedKW(e.target.value)}
                      className="rounded-lg border-white/30 bg-white/10 text-white placeholder-white/70 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter w-full mb-4"
                    >
                      <option value="">Select kW</option>
                      <option value="24">24kW</option>
                      <option value="30">30kW</option>
                      <option value="35">35kW</option>
                    </select>

                    <div className="grid grid-cols-1 gap-4 mb-4">
                      {worcesterModels.map(model => (
                        <div key={model.name} className={`p-4 rounded-lg border cursor-pointer ${selectedModel === model.name ? 'border-orange-500 bg-orange-500/20' : 'border-white/30 bg-white/10'}`} onClick={() => setSelectedModel(model.name)}>
                          <img src={model.image} alt={model.name} className="w-full h-32 object-cover rounded-lg mb-2 hover:scale-105 transition-all duration-300 ease-in-out" />
                          <p className="text-white font-inter leading-1.5">{model.name}</p>
                          <p className="text-white/70 text-sm leading-1.5">{model.kW} kW</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <textarea
                      placeholder="Message"
                      {...register('message')}
                      className="rounded-lg border-white/30 bg-white/10 text-white placeholder-white/70 focus:border-orange-500 focus:ring-orange-500 p-4 shadow-sm font-inter w-full mb-4"
                      rows={4}
                    ></textarea>
                  </>
                )}

                {/* Honeypot */}
                <input
                  type="text"
                  {...register('website')}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {error && <p className="text-red-300 mb-2">{error}</p>}

                <div className="flex gap-4">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out flex-1"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type={currentStep === totalSteps ? 'submit' : 'button'}
                    onClick={currentStep === totalSteps ? undefined : nextStep}
                    disabled={isLoading}
                    className={`bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out flex-1 disabled:opacity-50 ${currentStep === totalSteps ? 'animate-pulse' : ''}`}
                  >
                    {isLoading ? 'Submitting...' : currentStep === totalSteps ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      )}
    </>
  );

  console.log("Task complete: Quote form modal polished - beautiful, animated, urgent.");
};

export default BoilerQuoteForm;