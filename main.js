const express = require('express');
const path = require('path');
const app = express();
const connection = require('./db');  // ✅ This triggers connection

// Serve static files
app.use(express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// API to fetch specific district data by ID
app.get('/district-data', (req, res) => {
  const districtId = req.query.id || 1;

  const query = 'SELECT * FROM dist WHERE id = ?';
  connection.query(query, [districtId], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'District not found' });
    }

    res.json(results[0]);
  });
});

// Serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dis.html'));
});

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
