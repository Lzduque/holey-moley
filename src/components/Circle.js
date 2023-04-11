import React from 'react'
import {useState} from 'react'

export default function Circle({active, addPoint}) {
	const [clicked, setClicked] = useState(false)

	const isLit = active && !clicked

	const handleClick = (e) => {
		addPoint()
		setClicked(true)
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
