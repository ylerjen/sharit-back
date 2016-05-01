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
        NewsBusiness.find(criteria, successCb);
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
        NewsBusiness.getById(id, successCb);
    });
    /**
     * Create a passed news
     */
    newsRouter.post(routeRoot, (req, res, next) => {
        var news = req.body;
        var successCb = (error, newsObj) => {
            res.status(201);
            res.send(news);
        };
        NewsBusiness.upsert(news, successCb);
    });
    /**
     * Update a passed news
     */
    newsRouter.put(routeRoot + '/:id', (req, res) => {
        var news = req.body;
        news.id = req.params.id;
        function successCb (newsObj) {
            res.status(200);
            res.send(newsObj);
        }
        NewsBusiness.upsert(news, successCb);
    });
    /**
     * Delete a news by its id
     */
    newsRouter.delete(routeRoot + '/:id', function (req, res) {
        var id = req.params.id;
        function successCb () {
            res.status(204);
            res.send();
        }
        NewsBusiness.destroy(id, successCb);
    });
    return newsRouter;
})();

module.exports = NewsSrv;