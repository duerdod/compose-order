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
  },
  async removeFromCart(parent, { id }, context) {
    const cart = await context.prisma.cartItem({ id }).cart();
    const cartItems = await context.prisma
      .cartItem({ id })
      .cart()
      .cartItem();

    if (cartItems.length <= 1) {
      return await context.prisma.deleteCart({ id: cart.id });
    }

    const deletedItem = await context.prisma.deleteCartItem({
      id
    });

    return deletedItem;
  },
  async incrementCartItem(parent, { id }, context) {
    // Get current quantity
    const { quantity } = await context.prisma.cartItem({ id });
    const incrementedItem = await context.prisma.updateCartItem({
      data: {
        quantity: quantity + 1
      },
      where: {
        id
      }
    });
    return incrementedItem;
  },

  async decrementCartItem(parent, args, context) {
    // Get current quantity
    const { quantity } = await context.prisma.cartItem({ id: args.id });
    const cart = await context.prisma.cart({ id: args.cartId }).cartItem();

    const isLastCartItemInCart = cart.length <= 1;
    const isLastCartItem = quantity <= 1;

    if (isLastCartItem && isLastCartItemInCart) {
      return await context.prisma.deleteCart({ id: args.cartId });
    } else if (isLastCartItem) {
      return await context.prisma.deleteCartItem({ id: args.id });
    } else {
      const decrementedItem = await context.prisma.updateCartItem({
        data: {
          quantity: quantity - 1
        },
        where: {
          id: args.id
        }
      });
      return decrementedItem;
    }
  }
};

module.exports = Mutation;
