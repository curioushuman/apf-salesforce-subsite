'use strict';

const jsforce = require('jsforce');
const jsforce_conn = new jsforce.Connection();
jsforce_conn.login(process.env.SALESFORCE_USERNAME, process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_SECURITY_TOKEN, function(err, res) {
  if (err) { return console.error(err); }
  jsforce_conn.query('SELECT Id, Name FROM Account', function(err, res) {
    if (err) { return console.error(err); }
    console.log(res);
  });
});
//
// jsforce_conn.query("SELECT Id, Name FROM Account LIMIT 1")
//   .then(function(res) {
//     // receive resolved result from the promise,
//     // then return another promise for continuing API execution.
//     return conn.sobject('Account').create({ Name: 'Another Account' });
//   })
//   .then(function(ret) {
//     // handle final result of API execution
//     // ...
//   }, function(err) {
//     // catch any errors in execution
//     // ...
//   });

/**
 * GET /
 * Application page.
 */
exports.index = (req, res) => {
  res.render('salesforce', {
    title: 'Salesforce'
  });
};
