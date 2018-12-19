const {db} = require('./index.js');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'All Users received!'
    })
  })
  .catch(err => next(err));
}

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE id = $1', [userId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'One User received'
    })
  })
  .catch(err => next(err));
}

const createUser = (req, res, next) => {
  db.none('INSERT INTO users(username, email) VALUES(${username}, ${email})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'A User has been added!'
    })
  })
  .catch(err => next(err));
}

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE id = $1', userId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      result: result,
      message: 'Deleted One User'
    })
  })
  .catch(err => next(err));
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser
};