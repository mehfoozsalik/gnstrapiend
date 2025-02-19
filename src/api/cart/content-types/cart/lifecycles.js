module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    // Check if Quantities is present
    if (data.Quantities) {
      const quantities = data.Quantities; // Example: { "product-slug-1": 2, "product-slug-2": 3 }
      const productSlugs = Object.keys(quantities);

      // Fetch product prices and calculate total
      const products = await strapi.entityService.findMany(
        "api::product.product",
        {
          filters: { Slug: { $in: productSlugs } },
          fields: ["Slug", "Price", "DiscountPrice"],
        },
      );

      // Calculate total price
      let totalPrice = 0;
      products.forEach((product) => {
        const quantity = quantities[product.Slug];
        const price = product.DiscountPrice
          ? product.DiscountPrice
          : product.Price;
        totalPrice += price * quantity;
      });

      // Assign calculated total price
      data.TotalPrice = totalPrice;
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;

    // Check if Quantities is updated
    if (data.Quantities) {
      const quantities = data.Quantities;
      const productSlugs = Object.keys(quantities);

      // Fetch product prices and calculate total
      const products = await strapi.entityService.findMany(
        "api::product.product",
        {
          filters: { Slug: { $in: productSlugs } },
          fields: ["Slug", "Price", "DiscountPrice"],
        },
      );

      // Calculate total price
      let totalPrice = 0;
      products.forEach((product) => {
        const quantity = quantities[product.Slug];
        const price = product.DiscountPrice
          ? product.DiscountPrice
          : product.Price;
        totalPrice += price * quantity;
      });

      // Assign calculated total price
      data.TotalPrice = totalPrice;
    }
  },
};
