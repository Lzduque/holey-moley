import React from 'react'

export default function Circle({active, number, score, setScore}) {
	const isLit = active === number

	const handleClick = (e) => {
		const newScore = score + 1
		setScore(newScore)
	}

	return isLit ? (
		<div
			className='block w-12 h-12 bg-red-600 rounded-full'
			onClick={handleClick}
		></div>
	) : (
		<div className='block w-12 h-12 bg-black rounded-full'></div>
	)
}
