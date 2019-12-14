const JWT = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    const router = req.url.split("/").filter(arg => arg === 'login')
    const token = req.headers['authorization'] || ''

    if(!router.length){
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                status: "TOKEN_VALIDATION",
                message: 'Token não informado!' 
            });
        }
      
        JWT.verify(token, process.env.SECRET, function(err, decoded) {
          if (err) {
            return res.status(500).json({ 
                success: false,
                status: "TOKEN_VALIDATION",
                message: 'Token inválido!' 
            });
          }

          const now = Date.now().valueOf() / 1000

          if (typeof decoded.exp !== 'undefined' && decoded.exp < now) {
            return res.status(500).json({ 
                success: false,
                status: "TOKEN_VALIDATION",
                message: 'Token expirado!' 
            });
          }
        });
    }

    next();
}