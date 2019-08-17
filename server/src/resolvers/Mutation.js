const Mutation = {
  async addProduct(parent, { ...args }, context) {
    const product = await context.prisma.createProduct({
      productName: args.productName,
      brand: args.brand,
      productType: parseInt(args.productType),
      description: args.description,
      image: args.image,
      price: parseInt(args.price)
    });
    return product;
  }
};

module.exports = Mutation;
