const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`
          ####################################
          🔥  Server listening on port: ${PORT} 🔥
          ####################################
    `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
