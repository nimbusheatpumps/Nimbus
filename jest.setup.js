require('dotenv').config({ path: '.env.local' });

import '@testing-library/jest-dom'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
  },
  AnimatePresence: ({ children }) => children,
}));