const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

module.exports = createJestConfig({
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  silent: true,
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/domain/**/use-cases/**/*.ts',
    '<rootDir>/src/presentation/**/**/*.{ts,tsx}',
    '<rootDir>/src/main/**/*.{ts,tsx}',
    '<rootDir>/src/providers/**/*.{ts,tsx}',
    '!<rootDir>/src/presentation/**/**/styles.ts',
    '!<rootDir>/src/presentation/styles/*.{ts,tsx}',
    '!<rootDir>/src/domain/**/use-cases/**/I*.ts',
    '!<rootDir>/src/main/factories/**/*.{ts,tsx}',
    '!<rootDir>/src/presentation/components/icons/**/*.{ts,tsx}',
    '!<rootDir>/src/presentation/components/**/*.{ts,tsx}',
    '!**/*.d.ts',
  ],
  coverageReporters: ['lcov', 'text'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/tests/e2e/cypress',
  ],
  moduleNameMapper: {
    '@/hooks/(.*)': '<rootDir>/src/presentation/hooks/$1',
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/config/jest-setup.ts'],
  setupFiles: ['jest-canvas-mock'],
  resolver: '<rootDir>/src/tests/config/resolver.js',
});
