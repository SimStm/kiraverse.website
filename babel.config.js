module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv'
        }
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@infleux/components': './src/components',
            '@infleux/screens': './src/screens',
            '@infleux/assets': './assets',
            '@infleux/helpers': './src/helpers',
            '@infleux/constants': './src/constants'
          },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.json',
            '.tsx',
            '.ts',
            '.native.js'
          ]
        }
      ],
      'react-native-reanimated/plugin'
    ]
  }
}
