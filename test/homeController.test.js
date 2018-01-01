const request = require('supertest');
const expect = require('expect');
const app = require('../server').app;

describe('HomeController Tests', () => {
    describe('GET /api/home', () => {
        it('should return 200 from Home index', (done) => {
            request(app)
                .get('/api/home')
                .expect(200)
                .end(done);
        });
        
        it('should return json body from home index', (done) => {
            request(app)
                .get('/api/home')
                .expect({
                    A00972539 : {
                        course: "COMPUTER SYSTEM",
                        name: "Timoteo Shockness"
        
                    }
                })
                .end(done);
                
        }); 
    });
    describe('GET /api/404', () => {
        it('should return a 404 error page with error msg', (done) => {
            request(app)
                .get('/api/404')
                .expect(404)
                .end(done);
        })
    });
      
})

// it('should return a 404 error page with error msg', (done) => {
//     request(app)
//         .get('/api/404')
//         .expect(404)
//         .expect((res) => {
//             expect(res.body).toContain({error: "Page not found"});
//         })
//         .end(done);
// })