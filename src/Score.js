import React from 'react'

export default function Score({score}) {
	return (
		<h3 className='block text-lg my-4	ml-2.5 mr-0 font-bold	bg-green-400 p-1.5 rounded-md'>
			Score: {score}
		</h3>
	)
}
