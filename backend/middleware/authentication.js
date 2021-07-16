const jwt = require('jsonwebtoken');

export const verifyToken = (req, res, next) => {
    const token = req.get('token');

    jwt.verify(token, process.env.JWTSECRET, (err, decodedToken) => {
        if (err) return res.status(401).json({ ok: false, err });

        req.user = decodedToken.user
        next();
    })
}