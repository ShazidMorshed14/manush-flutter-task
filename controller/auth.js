var jwt = require("jsonwebtoken");
const { generateUniqueId } = require("../utils");

const signin = async (req, res) => {
  try {
    const { identifier, password } = req.body;
 
    if(!identifier){
      return res.status(400).json({ message: "identifier not found!Please send raw json" });
    
    }

   if(!password){
      return res.status(400).json({ message: "password not found!Please send raw json" });
    
    }


    let isAuthenticated = false;

    if (identifier == "01711355057" && password == "manush@456") {
      isAuthenticated = true;
    }

    if (isAuthenticated) {
      var token = jwt.sign(
        { id: generateUniqueId() },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1D",
        }
      );

      return res.status(200).json({
        status: 200,
        message: "User logged in successfully",
        data: {
          user: {
            username: "Manush Admin",
            phone: "+8801711355057",
          },
          token: token,
        },
      });
    } else {
      return res.status(404).json({ message: "No user with this phone" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signin };
