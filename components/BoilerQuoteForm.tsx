import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/button';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email'),
  postcode: z.string().min(1, 'Postcode is required'),
  range: z.string().min(1, 'Range is required'),
  message: z.string().optional(),
  website: z.string().optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

interface BoilerQuoteFormProps {
  fullPage?: boolean;
}

const BoilerQuoteForm: React.FC<BoilerQuoteFormProps> = ({ fullPage = false }) => {
  const [isOpen, setIsOpen] = useState(!fullPage);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const closeModal = () => setIsOpen(false);

  const nextStep = () => {
    let valid = true;
    if (currentStep === 1) {
      if (!watch('name') || !watch('phone') || !watch('email') || errors.name || errors.phone || errors.email) valid = false;
    } else if (currentStep === 2) {
      if (!watch('postcode') || !watch('range') || errors.postcode || errors.range) valid = false;
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
        className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto"
      >
        <p className="text-red-600 font-bold animate-pulse mb-4">3 slots left this week – £150 off if booked today</p>

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
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full disabled:opacity-50"
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50" onClick={closeModal}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-28rem mx-auto bg-white rounded-2xl shadow-2xl border border-teal-500 p-8 relative"
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl">×</button>

            <div className="bg-red-600 text-white text-center py-2 rounded-t-lg mb-4">£150 Winter Discount – Only 7 Slots Left This Week</div>

            <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">Get Your Fixed-Price Boiler Quote</h2>

            <div className="w-full bg-teal-500 rounded-full h-3 mb-6">
              <motion.div className="bg-orange-600 h-3 rounded-full" initial={{width: 0}} animate={{width: `${(currentStep / totalSteps) * 100}%`}} transition={{duration: 0.3}}></motion.div>
            </div>

            {success ? (
              <div className="text-center">
                <div className="text-green-600 text-6xl mb-4">✓</div>
                <p className="text-green-600 font-bold">Thank you! We’ll call you within 1 hour</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                />
                {errors.name && <p className="text-red-500 mb-2">{errors.name.message}</p>}

                <input
                  type="tel"
                  placeholder="Phone"
                  {...register('phone')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                />
                {errors.phone && <p className="text-red-500 mb-2">{errors.phone.message}</p>}

                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                />
                {errors.email && <p className="text-red-500 mb-2">{errors.email.message}</p>}

                <input
                  type="text"
                  placeholder="Postcode"
                  {...register('postcode')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                />
                {errors.postcode && <p className="text-red-500 mb-2">{errors.postcode.message}</p>}

                <select
                  {...register('range')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                >
                  <option value="">Select Range</option>
                  <option value="Combi">Combi</option>
                  <option value="System">System</option>
                  <option value="Regular">Regular</option>
                </select>
                {errors.range && <p className="text-red-500 mb-2">{errors.range.message}</p>}

                <textarea
                  placeholder="Message"
                  {...register('message')}
                  className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                  rows={4}
                ></textarea>

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
                  type="submit"
                  disabled={isLoading}
                  className="font-bold py-3 px-8 rounded-lg w-full disabled:opacity-50"
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default BoilerQuoteForm;