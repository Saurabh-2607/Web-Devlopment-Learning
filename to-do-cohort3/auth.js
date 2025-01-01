const jwt  = require('jsonwebtoken');



function auth(req,res,next){
    const token = req.header.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.userId;
        next();
  } else {
        res.status(403).json({
            message: 'Invalid Credentials'
        })
    }
}
