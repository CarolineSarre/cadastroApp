// jest.config.js
module.exports = {
  preset: 'react-native',
  // ...outras configs
  transformIgnorePatterns: [
    // padrão ignora node_modules exceto react-native e seus pacotes relacionados
    "node_modules/(?!react-native|@react-native|react-native-vector-icons)/"
  ],
  // se precisar, especifique transform para usar babel-jest
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};