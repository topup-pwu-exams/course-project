const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'course',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: process.env.REACT_APP_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)