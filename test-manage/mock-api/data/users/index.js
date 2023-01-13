const casual = require('casual');

casual.define('user', function () {
  return {
    id: casual.integer(),
    email: casual.email,
    password: 'test'
  };
});

const data = [];

casual.define('user_list', function () {
  for (let i = 0; i < 5; i++) {
    data.push(casual.user);
  }

  return data;
});

const users = casual.user_list;
module.exports = { users };
