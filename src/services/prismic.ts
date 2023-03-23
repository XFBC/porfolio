// import Prismic from '@prismicio/client'
// import { DefaultClient } from '@prismicio/client/types/client'

// export function getPrismicClient(req?: unknown): DefaultClient {
//   const prismic = new Prismic.Client(process.env.PRISMIC_API_ENDPOINT, {
//     req,
//     accessToken: process.env.PRISMIC_ACCESS_TOKEN
//   })
//   return Prismic
// }

import * as prismic from '@prismicio/client'

const apiEndpoint = 'https://porfotlio.cdn.prismic.io/api/v2'
const accessToken =
  'MC5aQnVJZ3hBQUFDSUFoUUtK.77-9aEZ777-9Su-_vShC77-9D--_ve-_vQHvv70OARfvv73vv73vv70z77-9KO-_ve-_vXDvv73vv715fXs'

export const client = prismic.createClient(apiEndpoint, { accessToken })
