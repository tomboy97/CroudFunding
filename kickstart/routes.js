const routes = require('next-routes')(); //this function returns

routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show') //colon represents whatever file inside that folder
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
