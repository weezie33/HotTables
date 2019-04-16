const reserveData = require('../data/tableData');
const waitListData = require('../data/waitinglistData');

module.exports = app => {
  //this tells the client what to show when user hits that specific route
  // ex: localhost:3000/api/tables
  app.get('/api/tables', (req, res) => {
    res.json(reserveData);
  });

  app.get('/api/waitlist', (req, res) => {
    res.json(waitListData);
  });

  //this is for adding in data into the arrays
  app.post('/api/tables', (req, res) => {
    //this checks if 5 tables are full
    if (reserveData.length < 5) {
      reserveData.push(req.body);
      res.json(true);
    } else {
      //send them to waitlist
      waitListData.push(req.body);
      res.json(false);
    }
  });
};
