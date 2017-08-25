const request = require('supertest')
const expect = require('expect')

const {app} = require("./../server")
const {todo} = require("./../models/todo")
const {user} = require('./../models/user')

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = "text todo test"; 
  })
});
