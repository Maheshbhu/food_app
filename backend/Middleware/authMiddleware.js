const jwt=require("jsonwebtoken");
const User=require("../Models/userModel");
const protect=async(req,res,next)=>{
    let token;
    try {
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
              token = req.headers.authorization.split(" ")[1];


              const decoded = jwt.verify(token, process.env.JWT_SECRET);
               //Attach user to request (excluding password)
                 req.user = await User.findById(decoded.id).select("-password");
                 if(!req.user){
                    return res.status(401).json({ message: "User not found" });
                 }
                 next()
        }

        else{
            return res.status(401).json({ message: "Not authorized, no token" });
        }
    } catch (error) {
        console.error("Auth error:", error);
    return res.status(401).json({ message: "Not authorized, invalid token" });
    }
}

module.exports = { protect };