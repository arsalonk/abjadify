import { SUBMIT_INPUT } from "../actions";
import { hValues } from '../abjad-keys/heavenly'

const initialState = {
  total: null,
  wordSums: [],
  letters: null,
  spaced: null,
  letterCount: null,
}

const heavenly = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_INPUT:

      let input = action.text
      let totalSum = 0
      let words = []
      let letters = []
      let spaced = []
      let letterCount = 0

      // total sum
      const splitString = input.trim().split('')
      splitString.map(letter => {
        if (hValues[letter]) {
          totalSum += hValues[letter];
        }
        return null;
      });

      // word sums
      const splitStringSpaced = input.trim().split(' ');
      splitStringSpaced.map(word => {
        if (word !== '') {
          let currentWord = {}
          let hWordSum = 0;
          const splitWord = word.split('');
          splitWord.map(letter => {
            hWordSum += hValues[letter];
            return null;
          });
          currentWord['key'] = word
          currentWord['value'] = hWordSum
          words.push(currentWord)
        }
        return null
      });

      // letter sums
      splitString.map(letter => {
        if (hValues[letter]) {
          letters.push(hValues[letter]);
          spaced.push(hValues[letter])
          letterCount += 1
        } else if (letter === ' ') {
          letters.push('   ');
          spaced.push('   ')
        }
        return null;
      })
      letters = letters.join('')
      spaced = spaced.join(' ')

      return {
        ...state,
        total: totalSum,
        wordSums: words,
        letters,
        spaced,
        letterCount
      }

    default:
      return state
  }
}

export default heavenly