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
      productType: Number(args.productType),
      description: args.description,
      image,
      price: Number(args.price)
    });
    return product;
  },

  async addToCart(parent, { input }, context) {
    const cart = await context.prisma.createCart({});
    input.forEach(async p => {
      const productsToCart = await context.prisma.createCartItem({
        quantity: p.quantity,
        product: {
          connect: {
            id: p.id
          }
        },
        cart: {
          connect: {
            id: cart.id
          }
        }
      });
      return productsToCart;
    });
    return cart;
  }
};

module.exports = Mutation;
