const db = require('../../data/db-config')
module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // select * from posts
  return db('posts');
}

async function getById(id) {
  // return db() where({id:id, foo: 'bar})
  // without .first() we will always get an array
  return db('posts').where('id', id).first()
}

async function create({ title, contents }) {
  const [id] = await db('posts').insert({ title, contents });
  const newPost = await getById(id);
  return newPost
  
}

async function update(id, { title, contents}) {
  return db('posts').where('id', id).update({ title, contents})
  .then(() => {
    return getById(id)
  })
}

async function remove(id) {
  return db('posts').where('id', id).del()
}
