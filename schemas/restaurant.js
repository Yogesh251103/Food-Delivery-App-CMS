import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Restaurant Name",
      validation : (Rule) => Rule.required(),
    },
    {
      name:"short_description",
      type:"string",
      title:"Short Description",
      validation : (Rule) => Rule.required(),
    },
    {
      name:"image",
      type:"image",
      title:"Image of the Restaurant",
      validation : (Rule) => Rule.required(),
    },
    {
      name:"lat",
      type:"number",
      title:"Latitude of the Restaurant",
      validation : (Rule) => Rule.required(),
    },
    {
      name:"long",
      type:"number",
      title:"Longitude of the Restaurant",
      validation : (Rule) => Rule.required(),
    },
    {
      name:"address",
      type:"string",
      title:"Restaurant address",
      validation : (Rule) => Rule.required(),
    },
    {
      name:"rating",
      type:"number",
      title:"Enter a Rating (1-5 Stars)",
      validation : (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error('Rating must be between 1 and 5'),
    },
    {
      name:"type",
      title:"Category",
      validation: (Rule) => Rule.required(),
      type:"reference",
      to:[{type:"category"}],
    },
    {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[{type:"reference",to:[{type:"dish"}]}]
    }
    
  ],
})
