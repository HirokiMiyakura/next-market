import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://HirokiMiyakura:kjRhAwgHreEUBWza@cluster0.7u2oq.mongodb.net/nextMarket15Data?retryWrites=true&w=majority&appName=Cluster0'
		);
		console.log('Success: Connected to MongoDB');
	} catch (error) {
		console.log('Failure: Unconnected to MongoDB');
		throw new Error();
	}
};

export default connectDB;

// import mongoose from 'mongoose';

// const connectDB = () => {
// 	try {
// 		mongoose.connect(
// 			'mongodb+srv://<db_username>:kjRhAwgHreEUBWza@cluster0.7u2oq.mongodb.net/nextMarket15Data?retryWrites=true&w=majority&appName=Cluster0'
// 		);
// 		console.log('Success: Connected to MongoDB');
// 	} catch (error) {
// 		console.log('Failure: Unconnected to MongoDB');
// 		throw new Error();
// 	}
// };

// export default connectDB;
