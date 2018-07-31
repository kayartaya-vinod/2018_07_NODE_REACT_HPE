module.exports = (req, resp, next)=>{

    resp.set('Access-Control-Allow-Origin', '*');
    resp.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

    next();
}