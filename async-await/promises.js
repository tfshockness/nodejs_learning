// new Promise ((resolve, reject) => {
//     resolve(); //send back the result
//     reject(); // send back data if was reject
// })

//Async - its a key word put in front of the fuction
//await  - its used inside of the Async function
//Async always returns a promise like
// () => {
//     return new Promise( (resolve, reject) => {
//         resolve('Tim')
//     })
// }

// const getName = async (userName) => //This will return Promise like: Promise { 'Tim' }
// {
//     return 'Tim';
// }
// console.log(getName());
// getName().then( name => {
//     console.log(name);
// });

// //To reject inside of a async function, you just need to throw new Error. This is the same of use reject() in Promise

// const getAge = async (userAge) => 
// {
//     throw new Error('Something wrong just happened!');
//     return 28;
// }

// getAge().then( age => {
//     console.log(age)
// }).catch(err => {
//     console.log(err);
// });
const getUser = (userId) => {
    return {id:1, name: 'Tim'}
};

//AWAIT - can be use just in a async function, and it await for a promise to be resolved or rejected.
const getUserInfo = async (userId) =>
{
    const user = await getUser(userId);
}