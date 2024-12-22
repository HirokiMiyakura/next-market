import connectDB from '@/app/utils/database';
import { ItemModel } from '@/app/utils/schemaModels';
import { NextResponse } from 'next/server';

export async function POST(request) {
	const reqBody = await request.json();

	try {
		await connectDB();
		await ItemModel.create(reqBody);
		return NextResponse.json({ message: 'アイテム作成' });
	} catch (error) {
		return NextResponse.json({ message: 'アイテム作成失敗' });
	}
}
