import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
	const token = await request.headers.get('Authorization')?.split(' ')[1];

	// 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTczNDkzOTMwNn0.kMkzjmVhRLCLqJF4qx7Ie61gZD5X0Kx1XOlmS0Z1FqY';

	if (!token) {
		return NextResponse.json({ message: 'トークンがありません' });
	}

	try {
		const secretKey = new TextEncoder().encode('next-market-app-book');
		const decodedJwt = await jwtVerify(token, secretKey);
		return NextResponse.next();
	} catch (error) {
		return NextResponse.json({
			message: 'トークンが正しくないので、ログインしてください',
		});
	}
}

export const config = {
	matcher: [
		'/api/item/create',
		'/api/item/update/:path*',
		'/api/item/delete/:path*',
	],
};
