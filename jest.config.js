module.exports = {
  // testEnvironment: "jsdom",
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  transform: {
    ".+\\.(js|jsx|ts|tsx)$": "ts-jest",
    // "^.+\\.(css)$": "<rootDir>/config/jest/cssTransform.js",
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    //   "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"],
  // moduleNameMapper: {
  //   "^@assets(.*)$": "<rootDir>/src/assets$1",
  //   "^@views(.*)$": "<rootDir>/src/views$1",
  //   "^@shared(.*)$": "<rootDir>/src/shared$1",
  //   "^@router(.*)$": "<rootDir>/src/router$1",
  // },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
