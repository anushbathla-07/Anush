export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  title: string;
  icon: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    title: 'Espresso',
    icon: 'Zap',
    items: [
      { name: 'Espresso', description: 'Single shot, rich and bold', price: '3.00' },
      { name: 'Macchiato', description: 'Espresso marked with steamed milk foam', price: '3.75' },
      { name: 'Cortado', description: 'Equal parts espresso and warm milk', price: '4.25' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk and thick foam', price: '4.75', tag: 'Classic' },
      { name: 'Flat White', description: 'Double ristretto with silky microfoam', price: '5.00' },
      { name: 'Latte', description: 'Espresso with steamed milk and light foam', price: '5.25' },
    ],
  },
  {
    title: 'Pour-Over & Filter',
    icon: 'Droplets',
    items: [
      { name: 'House Drip', description: 'Rotating single-origin, brewed fresh every hour', price: '4.00' },
      { name: 'Chemex', description: 'Clean, bright, and floral — served for two', price: '6.50', tag: 'Slow Brew' },
      { name: 'V60 Pour-Over', description: 'Hand-poured, highlighting origin notes', price: '5.75' },
      { name: 'Cold Brew', description: 'Steeped 18 hours, smooth and low-acid', price: '4.75' },
      { name: 'Nitro Cold Brew', description: 'Cold brew on nitro — creamy, cascading pour', price: '5.50', tag: 'New' },
    ],
  },
  {
    title: 'Signature Drinks',
    icon: 'Sparkles',
    items: [
      { name: 'Honey Cardamom Latte', description: 'Espresso, raw honey, cardamom, steamed milk', price: '6.00', tag: "Barista's Pick" },
      { name: 'Brown Sugar Oat Latte', description: 'Espresso, brown sugar syrup, oat milk', price: '6.25' },
      { name: 'Maple Bourbon Cold Brew', description: 'Cold brew, maple syrup, bourbon vanilla', price: '6.50' },
      { name: 'Spiced Mocha', description: 'Espresso, dark chocolate, cinnamon, chili', price: '5.75' },
      { name: 'Lavender White Mocha', description: 'White chocolate, culinary lavender, espresso', price: '6.00', tag: 'Seasonal' },
    ],
  },
  {
    title: 'Pastries & Bites',
    icon: 'Croissant',
    items: [
      { name: 'Butter Croissant', description: 'Flaky, laminated, baked fresh each morning', price: '4.00' },
      { name: 'Almond Croissant', description: 'Twice-baked with frangipane filling', price: '4.75', tag: 'Popular' },
      { name: 'Pain au Chocolat', description: 'Butter croissant with dark chocolate batons', price: '4.50' },
      { name: 'Banana Walnut Bread', description: 'Toasted with cultured butter', price: '3.75' },
      { name: 'Avocado Toast', description: 'Sourdough, smashed avocado, chili flakes, sea salt', price: '7.50' },
      { name: 'Gouda & Fig Grilled Cheese', description: 'Aged gouda, fig jam, sourdough', price: '8.50' },
    ],
  },
];
