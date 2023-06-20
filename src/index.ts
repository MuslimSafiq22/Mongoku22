import { MongoClient, MongoClientOptions } from 'mongodb';

const url = 'mongodb://localhost:27017/Muslim';

const options: MongoClientOptions = {
  useUnifiedTopology: true,
};

MongoClient.connect(url, options, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  // Kode logika setelah berhasil terhubung ke MongoDB
});
