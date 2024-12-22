import { NextResponse } from 'next/server';
import connectDB from '@/app/utils/database';
import { ItemModel } from '@/app/utils/schemaModels';

export async function GET() {
	try {
		await connectDB();
		const allItems = await ItemModel.find();
		return NextResponse.json({
			message: 'アイテム読み込み成功（オール）',
			allItems: allItems,
		});
	} catch (error) {
		return NextResponse.json({ message: 'アイテム読み込み失敗（オール）' });
	}
}

export const validate = 0;
