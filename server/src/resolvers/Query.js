const Query = {
  products(root, args, context) {
    return context.prisma.products();
  },
  product(root, { id }, context) {
    return context.prisma.product({ id });
  },
  cart(root, { id }, context) {
    return context.prisma.cart({ id });
  }
};

module.exports = Query;
