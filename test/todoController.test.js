const request = require('supertest');
const expect = require('expect');
const { app } = require('../server');
const Todo = require('../src/models/todo');
const { ObjectID } = require('mongodb');

//beforeEach( done => Todo.remove({}).then( () => done()));

describe('TodoController TEST', () => {
    describe('POST /api/todos', () => {
        it('should create a new Todo and save to db', done => {
            const todo = {
                title: "Todo Test",
                text: "Testing POST todo"
            };
            request(app)
                .post('/api/todos')
                .send(todo)
                .expect(201)
                .end(done);
        });
        it('should not create a todo with empty body', done => {
            const emptyTodo = {};
            request(app)
                .post('/api/todos')
                .send(emptyTodo)
                .expect(400)
                .end(done);
        });
    });
    describe('GET /api/todos', () => {
        it('should return a array of Todo', done => {
            var count = 0;
            Todo.count({}, (err, c) => {
                count = c;
            });

            request(app)
                .get('/api/todos')
                .expect(200)
                .expect(res => {
                    expect(res.body.length).toBe(count);
                })
                .end(done);
        });
    });
    describe('GET /api/todos/:id', () => {
        it('should return a todo by Id', async (done) => {
            const todo =  await Todo({
                title: 'Testing',
                text: 'Creating a test for GetById'
            }).save();

            request(app)
                .get(`/api/todos/${todo._id}`)
                .expect(200)
                .expect(res => {
                    expect(res.body.text).toBe('Creating a test for GetById');
                })
                .end(done);
        });

        it('should return a 404 for a non-existing ID', done => {
            request(app)
                .get('/api/todos/123123')
                .expect(404)
                .end(done);
        })
    });
});