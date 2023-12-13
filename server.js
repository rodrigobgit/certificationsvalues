const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const certificationData = [
  {
    certificationName: 'Salesforce Certified Administrator',
    domain: 'Salesforce',
    rewardValue: '100€'
  },
  {
	  certificationName: 'Salesforce Certified Developer',
	  domain: 'Salesforce',
	  rewardValue: '100€'
  },
  {
	  certificationName: 'Java Developer',
	  domain: 'Oracle',
	  rewardValue: '300€'
  },
  {
	  certificationName: 'Python Developer',
	  domain: 'Python',
	  rewardValue: '200€'
  },
  // Add more data as needed
];

app.get('/api/certifications', (req, res) => {
  res.json(certificationData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});