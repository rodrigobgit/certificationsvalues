const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const certificationData = [
  {
    certificationName: 'Salesforce Certified Administrator',
    domain: 'Salesforce',
    rewardValue: '100€'
  },
  // Add more data as needed
];

app.get('/api/certifications', (req, res) => {
  res.json(certificationData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});