const express = require('express');
const app = express();

app.get('/api/messages', (req, res) => {
  const messages = [
    {
      id: 1,
      text: 'Hello world!',
      user: 'Awonke',
      timestamp: new Date().getTime()
    },
    {
      id: 2,
      text: 'How are you?',
      user: 'Abongile',
      timestamp: new Date().getTime()
    },
    {
      id: 3,
      text: 'I am doing great, thanks for asking!',
      user: 'Christopher',
      timestamp: new Date().getTime()
    }
  ];

  console.log('Sending messages:', messages);
  res.json(messages);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
