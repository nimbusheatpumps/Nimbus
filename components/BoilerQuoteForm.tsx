import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

const StepIndicator: React.FC<{ currentStep: number; totalSteps: number }> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center mb-4">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={cn(
            'w-3 h-3 rounded-full mx-1 transition-colors',
            i < currentStep ? 'bg-teal-600' : i === currentStep ? 'bg-teal-400' : 'bg-gray-300'
          )}
        />
      ))}
    </div>
  );
};

interface FormData {
  homeType: string;
  postcode: string;
  needs: string;
  upsell: boolean;
  preferredBrand: string;
  interestedIn: string;
}

interface BoilerQuoteFormProps {
  isModal?: boolean;
}

const BoilerQuoteForm: React.FC<BoilerQuoteFormProps> = ({ isModal = false }) => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const hoverLift = {
    whileHover: { y: -5 },
  };

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({ homeType: '', postcode: '', needs: '', upsell: false, preferredBrand: 'Worcester Bosch', interestedIn: '' });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-03-31T23:59:59');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (step === 1 && !formData.postcode.startsWith('DN15')) {
      setErrors({ postcode: 'Postcode must start with DN15' });
      return;
    }
    setErrors({});
    if (step < 2) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      {!isModal && (
        <Card className="max-w-md mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>Boiler Quote Form</CardTitle>
          </CardHeader>
          <div className="bg-red-500 text-white p-4 rounded mb-4">
            <h3 className="font-bold">Limited Time Winter Discount - £150 Off!</h3>
            <p>Offer ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
            <div className="mt-2">
              <p className="text-sm">Only 15% availability remaining!</p>
              <div className="bg-red-700 h-2 rounded mt-1">
                <div className="bg-orange-400 h-2 rounded" style={{width: '15%'}}></div>
              </div>
            </div>
          </div>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {step === 0 && (
                  <fieldset>
                    <legend>Home Type</legend>
                    {['Detached', 'Semi-Detached', 'Terraced', 'Flat'].map(type => (
                      <label key={type} className="block">
                        <input type="radio" name="homeType" value={type} onChange={handleChange} aria-describedby={`homeType-${type}`} />
                        {type}
                      </label>
                    ))}
                  </fieldset>
                )}
                {step === 1 && (
                  <div>
                    <label htmlFor="postcode">Postcode</label>
                    <input
                      id="postcode"
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      aria-invalid={!!errors.postcode}
                      aria-describedby="postcode-error"
                    />
                    {errors.postcode && <p id="postcode-error" role="alert">{errors.postcode}</p>}
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <fieldset>
                      <legend>Needs</legend>
                      {['New Boiler', 'Repair', 'Upgrade'].map(need => (
                        <label key={need} className="block">
                          <input type="radio" name="needs" value={need} onChange={handleChange} aria-describedby={`needs-${need}`} />
                          {need}
                        </label>
                      ))}
                      <label className="block">
                        <input type="checkbox" name="upsell" checked={formData.upsell} onChange={handleChange} />
                        Interested in Heat Pump grant?
                      </label>
                    </fieldset>
                    <div className="mt-4">
                      <label htmlFor="interestedIn">Range & kW</label>
                      <select
                        id="interestedIn"
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="1000 (25kW)">1000 (25kW)</option>
                        <option value="2000 (25/30kW)">2000 (25/30kW)</option>
                        <option value="4000 (25/30/35kW)">4000 (25/30/35kW)</option>
                        <option value="8000 (25/30/35kW with Smart Controls)">8000 (25/30/35kW with Smart Controls)</option>
                      </select>
                    </div>
                    <div className="mt-4">
                      <label htmlFor="preferredBrand">Preferred Brand</label>
                      <select
                        id="preferredBrand"
                        name="preferredBrand"
                        value={formData.preferredBrand}
                        onChange={handleChange}
                      >
                        <option value="Worcester Bosch">Worcester Bosch</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between mt-4">
              {step > 0 && <motion.div variants={hoverLift} whileHover="whileHover"><Button onClick={handlePrev} className="bg-orange-500 hover:bg-orange-600 text-white">Previous</Button></motion.div>}
              {step < 2 ? <motion.div variants={hoverLift} whileHover="whileHover"><Button onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 text-white">Next</Button></motion.div> : <motion.div variants={hoverLift} whileHover="whileHover"><Button onClick={handleSubmit} className="bg-orange-500 hover:bg-orange-600 text-white">Submit</Button></motion.div>}
            </div>
          </CardContent>
        </Card>
      )}
      {isModal && (
        <>
          <h2 className="text-lg font-semibold mb-4">Boiler Quote Form</h2>
          <StepIndicator currentStep={step} totalSteps={3} />
          <div className="bg-teal-600 text-white p-4 rounded mb-4">
            <h3 className="font-bold">Limited Time Winter Discount - £150 Off!</h3>
            <p>Offer ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
            <div className="mt-2">
              <p className="text-sm">Only 15% availability remaining!</p>
              <div className="bg-teal-700 h-2 rounded mt-1">
                <div className="bg-teal-400 h-2 rounded" style={{width: '15%'}}></div>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && (
                <fieldset>
                  <legend>Home Type</legend>
                  {['Detached', 'Semi-Detached', 'Terraced', 'Flat'].map(type => (
                    <label key={type} className="block">
                      <input type="radio" name="homeType" value={type} onChange={handleChange} aria-describedby={`homeType-${type}`} />
                      {type}
                    </label>
                  ))}
                </fieldset>
              )}
              {step === 1 && (
                <div>
                  <label htmlFor="postcode" className="block mb-2 font-medium">Postcode</label>
                  <input
                    id="postcode"
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    aria-invalid={!!errors.postcode}
                    aria-describedby="postcode-error"
                  />
                  {errors.postcode && <p id="postcode-error" role="alert" className="text-red-500 text-sm mt-1">{errors.postcode}</p>}
                </div>
              )}
              {step === 2 && (
                <div>
                  <fieldset>
                    <legend>Needs</legend>
                    {['New Boiler', 'Repair', 'Upgrade'].map(need => (
                      <label key={need} className="block">
                        <input type="radio" name="needs" value={need} onChange={handleChange} aria-describedby={`needs-${need}`} />
                        {need}
                      </label>
                    ))}
                    <label className="block">
                      <input type="checkbox" name="upsell" checked={formData.upsell} onChange={handleChange} />
                      Interested in Heat Pump grant?
                    </label>
                  </fieldset>
                  <div className="mt-4">
                    <label htmlFor="interestedIn" className="block mb-2 font-medium">Range & kW</label>
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select an option</option>
                      <option value="1000 (25kW)">1000 (25kW)</option>
                      <option value="2000 (25/30kW)">2000 (25/30kW)</option>
                      <option value="4000 (25/30/35kW)">4000 (25/30/35kW)</option>
                      <option value="8000 (25/30/35kW with Smart Controls)">8000 (25/30/35kW with Smart Controls)</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="preferredBrand" className="block mb-2 font-medium">Preferred Brand</label>
                    <select
                      id="preferredBrand"
                      name="preferredBrand"
                      value={formData.preferredBrand}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="Worcester Bosch">Worcester Bosch</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-4">
            {step > 0 && <motion.div variants={hoverLift} whileHover="whileHover"><Button onClick={handlePrev} className="bg-orange-500 hover:bg-orange-600 text-white">Previous</Button></motion.div>}
            {step < 2 ? <motion.div variants={hoverLift} whileHover="whileHover"><Button onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 text-white">Next</Button></motion.div> : <motion.div variants={hoverLift} whileHover="whileHover"><Button onClick={handleSubmit} className="bg-orange-500 hover:bg-orange-600 text-white">Submit</Button></motion.div>}
          </div>
        </>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>Fixed Quote £2,200 – Book Next Day</p>
            <motion.div variants={hoverLift} whileHover="whileHover"><Button onClick={() => setShowModal(false)} className="bg-orange-500 hover:bg-orange-600 text-white">Close</Button></motion.div>
          </div>
        </div>
      )}
      <Accordion />
    </motion.div>
  );
};

const Accordion: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="faq-answer">
        Boiler install cost Scunthorpe 2025?
      </button>
      {open && <p id="faq-answer">Our fixed quote for boiler installation in Scunthorpe is £2,200, with next day booking available.</p>}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Boiler install cost Scunthorpe 2025?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our fixed quote for boiler installation in Scunthorpe is £2,200, with next day booking available."
            }
          }]
        })
      }} />
    </div>
  );
};

export default BoilerQuoteForm;