var Auth = {};

Auth.isAuthenticated = function( req, res, next ){
    if( !req.session.userid ) {
        res.send(false);
    }
    else {
        next();
    }
};

module.exports = Auth;