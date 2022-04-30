export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'firstName',
        maxLength: 96,
      },
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'firstName',
      media: 'avatar',
    },
  },
}
