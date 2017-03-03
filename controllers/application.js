'use strict';

const jsforce = require('jsforce');
const jsforce_conn = new jsforce.Connection();
jsforce_conn.login(process.env.SALESFORCE_USERNAME, process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_SECURITY_TOKEN, function(err, res) {
  if (err) { return console.error(err); }
  // probably should have better error handling on this one
});

/**
 * GET /
 * Application page.
 */
exports.index = (req, res) => {
  jsforce_conn.sobject('Action__C').retrieve(req.params.action)
    .then(function(result) {
      console.log("Name : " + result.Name);
      res.render('application', {
        title: 'Application form',
        subtitle: result.Name
      });
    }, function(err) {
      console.error(err);
      res.render('application', {
        title: 'Application form',
        subtitle: 'Action not found'
      });
    });
};
