var express = require('express'),
    NewsBusiness = require('../02_business/NewsBusiness');

var NewsSrv = (() => {
    var newsRouter = express.Router();
    
    var routeRoot = '/news';
    /**
     * Get the full news list
     */
    newsRouter.get(routeRoot, (request, response, next) => {
        var successCb = (error, newsList) => {
            response.send(newsList);
        };
        var criteria = {}; // no filter, get all objects
        NewsBusiness.findNews(criteria, successCb);
    });
    /**
     * Get a specific news by its id
     */
    newsRouter.get(routeRoot + '/:id', (request, response, next) => {
        var id = request.params.id;
        console.log('NewsSrv');
        var successCb = function (error, news) {
            response.send(news);        
        };
        NewsBusiness.getNewsById(id, successCb);
    });
    /**
     * Store a news
     */
    newsRouter.post(routeRoot, (req, res, next) => {
        var news = req.body;
        var successCb = (error, news) => {
            res.send(news);
        };
        NewsBusiness.upsertNews(news, successCb);
    });

    return newsRouter;
})();

module.exports = NewsSrv;