// var models = require("./server.js").models

// var toSave = [
//     {name: 'drmsysr', email: 'drmsysr@mail.com'},
//     {name: 'drmsys', email: 'drmsys@mail.com'},
//     {name: 'drmsy', email: 'drmsy@mail.com'},
//     {name: 'drms', email: 'drms@mail.com'},
//     {name: 'drm', email: 'drm@mail.com'},
//     {name: 'dr', email: 'dr@mail.com'},
//     {name: 'd', email: 'd@mail.com'},
// ]

// toSave.map(obj =>{
//     models.Profile.create(obj, (err, created) => {
//         console.log("Created?", created)
//     })
// })
/*
var filter = {
    where: {
        name: {like: 'drms'},
        postCount: {gt: 10}
    },
    order: 'date ASC',
    limit: 10,
    skip: 0,
    fields: {
        email:true
    }
}
*/

// models.Profile.findById("1", {include: 'Posts'}, (err, found) => {
//     console.log("Found?", err, found)
//     found.Posts.destroyAll({date: {lte: new Date('2020-04-24')}})
// })