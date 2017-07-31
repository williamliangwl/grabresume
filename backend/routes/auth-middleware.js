var Auth = {};

Auth.isAuthenticated = function( req, res, next ){
    if( !req.session.userid ) {
        res.send('Not authenticated');
    }
    else {
        next();
    }
};

module.exports = Auth;