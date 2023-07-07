async function getData() {
	const url = process.env.NEXT_PUBLIC_VERCEL_URL
		? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/`
		: 'http://localhost:3000/api/'

	const res = await fetch(`${url}/hello`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const data = await getData()

	return <div>{data.msg}</div>
}
