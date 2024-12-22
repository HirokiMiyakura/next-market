import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	title: String,
	image: String,
	price: String,
	description: String,
	email: String,
});

// export const ItemModel = mongoose.model('Item', ItemSchema);

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: String,
});

export const ItemModel =
	mongoose.models.Item || mongoose.model('Item', ItemSchema);

export const UserModel =
	mongoose.models.User || mongoose.model('User', UserSchema);
