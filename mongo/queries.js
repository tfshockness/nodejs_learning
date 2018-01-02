const { mongoose } = require('../src/db/mongoose');
const Todo = require('../src/models/todo');
console.log('STARTED!');
const id = '5a49f39e87f123159cab3e1b';

const find = async (id, collection) => {
    try {
        const result = await collection.find({
            _id: id
        });
        //It returns a Array with result or empty array
        console.log('FIND FUNCTION', result);
    } catch (error) {
        console.log(error);
    }
}
const findOne = async (id, collection) => {
    try {
        const result = await collection.findOne({
            _id:id
        });
        //It returns a Object with the result or null
        console.log('FIND ONE FUNCTION', result);
    } catch (error) {
        console.log(error);
    }
}
const findById = async (id, collection) => {
    try {
        const result = await collection.findById(id);
        //It returns a Object with result or null
        console.log('FIND BY ID FUNCTION', result);
    } catch (error) {
        console.log(error);
    }
}
find(id, Todo);
findOne(id, Todo);
findById(id, Todo);