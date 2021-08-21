/** @format */

import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;

		// server side validation
		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid input." });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
		};

		// Connecting to MongoDB(Connecting to the Database)
		let client;

		const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.beyi8.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

		try {
			client = await MongoClient.connect(connectionString);
			console.log(
				"MongoDB database connection established successfully ...",
			);
		} catch (error) {
			console.log("MongoDB connection error:", error);
			res.status(500).json({ message: "Could not connect to database." });

			return;
		}

		const db = client.db();

		try {
			const result = await db.collection("messages").insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: "Storing message failed!" });
			return;
		}

		client.close();

		res.status(201).json({
			message: "Successfully stored message!",
			message: newMessage,
		});
	}
}

export default handler;
