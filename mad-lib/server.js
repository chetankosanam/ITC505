const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Routes
server.post('/ITC505/lab-7/', (req, res) => {
  const { noun, verb, adjective, pluralNoun, place } = req.body;
  
  // Validation for empty fields
  if (!noun || !verb || !adjective || !pluralNoun || !place) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out ALL fields.</p>
      <a href="/ITC505/lab-7/">Go Back to Form</a>
    `);
    return;
  }

  // Mad Libs Response
  const madLib = `
    Once upon a time in ${place}, there was a ${adjective} ${noun}.
    It loved to ${verb} with ${pluralNoun} all day long.
    It was the happiest ${noun} in the entire ${place}!
  `;

  res.send(`
    <h1>Mad Libs Result</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/">Play Again</a>
  `);
});

// Static Page Serving
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Setup Server
let port = 80;
if (process.argv[2] === 'local') {
  port = 8080;
}
server.listen(port, () => console.log('Server running on localhost!'));
