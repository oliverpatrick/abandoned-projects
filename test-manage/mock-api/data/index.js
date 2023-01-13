const fs = require('fs');
const path = require('path');
const mockUserData = require('../data/users/index');
const mockEmployeeData = require('../data/details/index');
const mockStatistics = require('../data/stats/index');

const { users } = mockUserData;
const { employees } = mockEmployeeData;
const { statistics } = mockStatistics;

const data = JSON.stringify({
  users,
  employees,
  statistics
});

const filepath = path.join(__dirname, '../db.json');

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log('Mock DB created.');
});
