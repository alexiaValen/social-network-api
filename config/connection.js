const { connect, connection } = require('mongoose');
const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://bizarrowill:Password123!@cluster0.8ogzorc.mongodb.net/';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
