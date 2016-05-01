var express = require('express'),
    CategoryBusiness = require('../02_business/CategoryBusiness');


var CategorySrv = (() => {
    var categoryRouter = express.Router();
    
    var routeRoot = '/category';
    /**
     * Get the full category list
     */
    categoryRouter.get(routeRoot, (request, response, next) => {
        var successCb = (error, categoryList) => {
            response.send(categoryList);
        };
        var criteria = {}; // no filter, get all objects
        CategoryBusiness.find(criteria, successCb);
    });


    /**
     * Delete a category by its id
     */
    categoryRouter.delete(routeRoot + '/:id', function (req, res) {
        var id = req.params.id;
        function successCb () {
            res.status(204);
            res.send();
        }
        CategoryBusiness.destroy(id, successCb);
    });
    return categoryRouter;
})();

module.exports = CategorySrv;