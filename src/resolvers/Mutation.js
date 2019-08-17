const Mutation = {
  async addProduct(parent, { ...args }, context) {
    const product = await context.prisma.createProduct({
      productName: args.productName,
      brand: args.brand,
      productType: args.productType,
      description: args.description,
      price: args.price
    });
    return product;
  }
};

module.exports = Mutation;
