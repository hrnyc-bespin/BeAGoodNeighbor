const Communities = require('./db.js').Communities

// Search the communties table for community centers matching the query
module.exports = (borough) => {
  let searchParam = { where: { borough: borough } };
  if (borough === 'All') searchParam = {};
  return Communities.findAll(searchParam)
    .then(results => {
     return results
    })
}




    