var express = require('express'),
    MwNews = require('../02_business/NewsBusiness');

var NewsSrv = (() => {
    var newsRouter = express.Router();
    
    var routeRoot = '/news';

    newsRouter.get(routeRoot + '/:id', (request, response, next) => {
        var id = request.params.id;
        console.log('NewsSrv');
        var news = MwNews.getNewsById(id);
        response.send(news);        
    });

    newsRouter.get(routeRoot, (request, response, next) => {
        // Do something ...
        response.send('hello');
    });

    return newsRouter;
})();

module.exports = NewsSrv;