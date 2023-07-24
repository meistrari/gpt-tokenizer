/* eslint-disable import/extensions */
import { convertTokenBytePairEncodingFromTuples } from '../convertTokenBytePairEncodingFromTuples.js'
import encoder from '../encodings/claude.js'
import { GptEncoding } from '../GptEncoding.js'

export * from '../specialTokens.js'

const api = GptEncoding.getEncodingApi('claude', () =>
  convertTokenBytePairEncodingFromTuples(encoder),
)
const {
  decode,
  decodeAsyncGenerator,
  decodeGenerator,
  encode: encodeRaw,
  encodeGenerator,
  isWithinTokenLimit,
  encodeChatGenerator,
} = api

// TODO: Remove this ugly ass hack
const encode = (str: string) => encodeRaw(str.replaceAll(/\s/g, '#'))

export {
  decode,
  decodeAsyncGenerator,
  decodeGenerator,
  encode,
  encodeChatGenerator,
  encodeGenerator,
  isWithinTokenLimit,
}
// eslint-disable-next-line import/no-default-export
export default api
