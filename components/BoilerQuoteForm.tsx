import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  boilerType: string;
  message: string;
}

const BoilerQuoteForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    boilerType: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Submit logic here
    setShowToast(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-teal-500 rounded-2xl shadow-2xl max-w-lg mx-auto bg-white p-8"
        >
          <div className="w-full bg-teal-200 rounded-full h-2 mb-6">
            <div
              className="bg-orange-500 rounded-full h-full"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>

          <div className="flex justify-center mb-6">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  i === currentStep ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <p className="text-red-600 font-bold animate-pulse mb-4">3 slots left this week – £150 off if booked today</p>

          {currentStep === 0 && (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
              />
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
              />
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <select
                name="boilerType"
                value={formData.boilerType}
                onChange={handleChange}
                className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
              >
                <option value="">Select Boiler Type</option>
                <option value="Combi">Combi</option>
                <option value="System">System</option>
                <option value="Regular">Regular</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500 w-full mb-4"
                rows={4}
              ></textarea>
            </div>
          )}

          <button
            onClick={currentStep < totalSteps - 1 ? handleNext : handleSubmit}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all w-full"
          >
            {currentStep < totalSteps - 1 ? 'Next' : 'Submit'}
          </button>

          {currentStep > 0 && (
            <button
              onClick={handlePrev}
              className="mt-2 text-gray-600 w-full"
            >
              Previous
            </button>
          )}
        </motion.div>
      </div>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-2 z-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Success! Quote submitted.
        </div>
      )}
    </>
  );
};

export default BoilerQuoteForm;