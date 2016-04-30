var MwNews = require("../02_middleware/MwNews");

beforeEach(()=>{
    
});

describe('The news middleware', () => {   
    
    it('should return nothing if the id is not a positiv number', () => {
        var news = MwNews.getNewsById(-1);
        expect(news).toBe(null);
    });
    
});