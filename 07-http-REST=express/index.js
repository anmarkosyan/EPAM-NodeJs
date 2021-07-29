import Express from 'express';

const app = Express();

const users = [
  { id: 1, name: 'Anush' },
  { id: 2, name: 'Aram' },
  { id: 3, name: 'Hayk' },
];

app.use((req, res, next) => {
  console.log(req.query);
  console.log(req.params);
  next();
});

app.get('/users', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.json(users);
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
