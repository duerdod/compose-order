const getImage = require('../utils');

const Mutation = {
  async addProduct(parent, { ...args }, context) {
    if (!args.productType) {
      throw new Error('Also select product type.');
    }
    const image = await getImage(args.productName);
    const product = await context.prisma.createProduct({
      productName: args.productName,
      brand: args.brand,
      productType: parseInt(args.productType),
      description: args.description,
      image,
      price: parseInt(args.price)
    });
    return product;
  },
  async createOrder(parent, { input }, context) {
    const totalPrice = input.reduce(
      (total, p) => (total += p.price * p.count),
      0
    );

    const productIds = input.map(p => ({
      id: p.id
    }));

    const order = await context.prisma.createOrder({
      totalPrice,
      currency: 'SEK',
      products: {
        connect: [...productIds]
      }
    });

    return order;
  },
  async addToCart(parent, args, context) {}
};

module.exports = Mutation;
