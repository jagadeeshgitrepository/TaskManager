import strings from '../public/i18n/translations/en.json'

import i18n from './i18n'

i18n.options.react.useSuspense = false

i18n.t = (translationString, countObject = { count: 1 }) => {
   const colonSplittedStrings = translationString.split(':')
   let dotSplittedStrings = []
   let resolvedStrings
   let result = ''
   if (colonSplittedStrings.length === 1) {
      dotSplittedStrings = colonSplittedStrings[0].split('.')
      resolvedStrings = strings
   }
   for (let index = 0; index < dotSplittedStrings.length; index++) {
      result = dotSplittedStrings[index]
      resolvedStrings = resolvedStrings[result]
   }
   return resolvedStrings
}