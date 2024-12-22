import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import connectDB from '@/app/utils/database';
import { UserModel } from '@/app/utils/schemaModels';

export async function POST(request) {
	const reqBody = await request.json();
	try {
		await connectDB();
		const savedUserData = await UserModel.findOne({ email: reqBody.email });
		console.log(savedUserData);
		if (savedUserData) {
			if (reqBody.password === savedUserData.password) {
				const secretKey = new TextEncoder().encode('next-market-app-book');
				const payload = {
					email: reqBody.email,
				};
				const token = await new SignJWT(payload)
					.setProtectedHeader({ alg: 'HS256' })
					.setExpirationTime('1d')
					.sign(secretKey);
				console.log(token);
				return NextResponse.json({ message: 'ログイン成功' });
			} else {
				return NextResponse.json({
					message: 'ログイン失敗:パスワードが間違っています。',
				});
			}
		} else {
			return NextResponse.json({
				message: 'ログイン失敗：ユーザー登録をしてください',
			});
		}
	} catch (error) {
		return NextResponse.json({ message: 'ログイン失敗' });
	}
}
