'use strict'

const db = require('./db')

//A collection is a grouping of MongoDB documents.
//Lista de users a serem adicionados na Collection.
const users = [
  {
    _id: 'alice',
    name: 'Alice',
    age: 25
  },
  {
    _id: 'bob',
    name: 'Bob',
    age: 30
  }
]

//Faz o insert+update dos users na Collection users.
db.collection('users').then(col => {
  const operations = users.map(user => ({
    updateOne: {
      filter: { _id: user._id },
      update: { $set: user },
      upsert: true
    }
  }))

  col.bulkWrite(operations)
})

//Lista a Collection users.
//db.collection('users').find
const userRepository = {
  all () {
    return db.collection('users')
      .then(col => col.find({}).toArray())
  }
}

module.exports = userRepository
