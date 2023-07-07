async function getData() {
	const res = await fetch('http://localhost:3000/api/hello')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const data = await getData()

	return <div>{data.msg}</div>
}
