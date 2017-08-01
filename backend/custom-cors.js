var CustomCors = {
    whiteLists : ['http://localhost:3000'],
    allowedMethods : [ 'GET', 'POST', 'PUT', 'OPTIONS' ],
    withCredentials : true
};

CustomCors.cors = function( req, res, next ){
    res.header("Access-Control-Allow-Origin", CustomCors.whiteLists.join(',') );
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", CustomCors.allowedMethods.join(',') );
    res.header("Access-Control-Allow-Credentials", CustomCors.withCredentials );
    next();
};

module.exports = CustomCors;