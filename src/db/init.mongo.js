const mongoose = require('mongoose');

const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.3nksh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(connectionString)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error');
      });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }

    return this.instance;
  }
}

module.exports = Database.getInstance();
