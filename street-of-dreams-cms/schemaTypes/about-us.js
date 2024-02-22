export const aboutUsPage = {
  name: 'about-us',
  type: 'document',
  title: 'About Us Page',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
