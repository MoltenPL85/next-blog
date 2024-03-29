import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { Contact } from '../../interfaces';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, message }: Contact = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage: Contact = {
      email,
      name,
      message,
    };

    let client: MongoClient;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.naz8h.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`,
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing data failed!' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Successfully stored message!' });
  }
};

export default handler;
