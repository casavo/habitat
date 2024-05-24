import StyleDictionary from 'style-dictionary'

StyleDictionary.registerTransform({
  matcher:({type}) => (['dimension'].includes(type)),
  name:'casavo-transform',
  transformer: ({value}) => `${value}px`,
  transitive: true,
  type: 'value',
})

StyleDictionary.extend({
  platforms: {
  json: {
    buildPath: './src/utils/',
    files: [
      {
        destination: 'token.json',
        format: 'json/nested'
      },
  ],
    transforms: ['casavo-transform']
  }
  },
  source: ['./tokens.json']
})
.buildAllPlatforms()
