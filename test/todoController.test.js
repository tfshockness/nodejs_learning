const request = require('supertest');
const expect = require('expect');
const { app } = require('../server');
const { Todo } = require('../src/models/todo')

//beforeEach( done => Todo.remove().then( () => done()));

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
        })
    });
});