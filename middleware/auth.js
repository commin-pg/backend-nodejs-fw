const { User } = require('../models/User');

let auth = (req, res, next) => {
    console.log(req)
    let token = req.cookies.w_auth;

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        console.log(token)
        if (!user)
            return res.json({
                isAuth: false,
                error: true
            });

        req.token = token;
        req.user = user;
        next();
    });
};

module.exports = { auth };