module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    "node_modules/(?!react-native|@react-native|react-native-vector-icons)/"
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};