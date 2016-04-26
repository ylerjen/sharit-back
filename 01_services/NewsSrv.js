module.exports = (() => {
    var express = require('express');
    var newsRouter = express.Router();
    
    var routeRoot = '/news';

    newsRouter.get(routeRoot + '/:id', (request, response, next) => {
      var t = request.params.id;
        // Do something ...
        
        response.send('coucou id : ' + t);
        
    });

    newsRouter.get(routeRoot, (request, response, next) => {
        // Do something ...
        response.send('hello');
    });

    return newsRouter;
})();