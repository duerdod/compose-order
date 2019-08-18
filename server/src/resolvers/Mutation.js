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
  }
};

module.exports = Mutation;
