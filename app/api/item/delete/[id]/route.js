import { NextResponse } from 'next/server';
import connectDB from '@/app/utils/database';
import { ItemModel } from '@/app/utils/schemaModels';

export async function DELETE(request, context) {
	const reqBody = await request.json();
	try {
		await connectDB();
		const params = await context.params;
		const singleItem = await ItemModel.findById(params.id);
		await ItemModel.deleteOne({ _id: params.id });
		return NextResponse.json({ message: 'アイテム削除成功' });
	} catch (error) {
		return NextResponse.json({ message: 'アイテム削除失敗' });
	}
}
