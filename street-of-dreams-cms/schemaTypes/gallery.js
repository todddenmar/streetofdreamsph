export const gallery = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the gallery',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Enter a brief description of the gallery',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'object', fields: [{type: 'string', name: 'text'}]}, {type: 'image'}],
      description: 'Add images to the gallery',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: 'Add tags to categorize the gallery',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
      }
    },
  },
}
