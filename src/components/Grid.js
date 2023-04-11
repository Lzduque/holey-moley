import React from 'react'
import {useState, useEffect} from 'react'
import Circle from './Circle'

export default function Grid({circles, setScore}) {
	const [active, setActive] = useState(null) // number of the circle that is active -> starts as null

	useEffect(() => {
		const interval = setInterval(
			() => setActive(Math.round(Math.random() * (15 - 1) + 1)),
			1000
		)
		return () => {
			clearInterval(interval)
		}
	}, [])

	const cells = circles.map((obj) => (
		<Circle active={active} number={obj} setScore={setScore} key={obj}>
			{obj}
		</Circle>
	))

	return (
		<div className='grid gap-y-3.5	gap-x-3.5	grid-cols-5	mx-auto my-auto w-1/4	'>
			{cells}
		</div>
	)
}
