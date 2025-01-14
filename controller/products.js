const { productsList } = require("../utils");

const getAllProduct = async (req, res) => {
  try {
    let { title } = req.query;

    let currentProducts = [...productsList];

    //here if the name is present then filter the products
    if (title) {
      currentProducts = currentProducts.filter((product) =>
        product.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    return res.status(200).json({
      status: 200,
      message: `Products fetched successfully!`,
      data: {
        products: currentProducts,
        total: currentProducts.length || 0,
      },
    });
  } catch (error) {
    console.error(`Error fetching products`, error);
    return res.status(500).json({ meassge: `Error fetching ${MODEL_NAME}` });
  }
};

module.exports = { getAllProduct };
