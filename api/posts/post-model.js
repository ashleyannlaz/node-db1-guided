const db = require("../../data/db-config.js")

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  return db("posts")  //SELECT * FROM posts 
  //.select("contents").limit(3)
}

async function getById(id) {
  return db("posts").where("id",id).first()     //SELECT * FROM posts WHERE id = someid
}

async function create() {
  return 'create wired'
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
