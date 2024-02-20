export const aboutUsPage = {
  name: 'about-us',
  type: 'document',
  title: 'About Us Page',
  fields: [
    {
      name: 'person',
      title: 'Person',
      type: 'array',
      of: [{type: 'image', name: 'image', title: 'Person Image'}],
      description: 'Add images to the gallery',
    },
  ],
}
