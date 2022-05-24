export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
    },
    {
      name: 'courseDuration',
      title: 'Course Duration (hours)',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: { type: 'user' },
    // },
    {
      name: 'author',
      title: 'Author',
      type: 'postedBy',
      // to: { type: 'user' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'likes',
      title: 'Liked By',
      type: 'array',
      of: [{ type: 'likes' }],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'tags' },
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    // {
      // name: 'purchasedBy',
      // title: 'Purchased By',
      // type: 'reference',
      // of: [{
      //   to: { type: 'user' },
      //   type: 'reference',
      // }],
    // },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'review',
      title: 'Review',
      type: 'array',
      of: [{ type: 'review' }],
    }
  ],
  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'mainImage',
    },
  },
}
