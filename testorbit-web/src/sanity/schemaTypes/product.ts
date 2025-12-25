export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    { name: 'name', title: 'Product Name', type: 'string' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Calorimetry', value: 'calorimetry' },
          { title: 'Fire Resistance', value: 'fire-resistance' },
          { title: 'Flammability', value: 'flammability' },
          { title: 'Glow Wire & Needle Flame', value: 'glow-wire' },
          { title: 'Ignitability', value: 'ignitability' },
          { title: 'Melt Flow', value: 'melt-flow' },
          { title: 'Oxygen Index', value: 'oxygen-index' },
          { title: 'Smoke Density', value: 'smoke-density' },
          { title: 'Thermal Deflection', value: 'thermal-deflection' },
          { title: 'Thermal Conductivity', value: 'thermal-conductivity' },
          { title: 'Toxicity', value: 'toxicity' },
        ],
      },
    },
    { name: 'image', title: 'Product Image', type: 'image', options: { hotspot: true } },
    { name: 'standards', title: 'Testing Standards (ASTM/ISO)', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
  ],
}