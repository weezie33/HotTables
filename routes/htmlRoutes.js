const path = require('path');

// this file basically directs which file to show depending on the route
module.exports = app => {
  //this shows to any route that's not described below
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, `../public/home.html`));
  });

  //this shows the tables html when localhost:3000/tables gets hit
  app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, `../public/tables.html`));
  });
  //this shows the current tables html when localhost:3000/reserve gets hit
  app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, `../public/reserve.html`));
  });
};
