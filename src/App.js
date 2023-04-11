import './App.css'
import Grid from './components/Grid'
import Score from './components/Score'
import {useState} from 'react'

const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function App() {
	const [score, setScore] = useState(0)

	const addPoint = () => {
		setScore((score) => score + 1)
	}

	return (
		<div className='block'>
			<header className='items-baseline	flex justify-center	'>
				<h1 className='text-center block text-3xl	font-bold	mx-5 my-0'>
					Holey Moley!
				</h1>
				<Score score={score} className='block'></Score>
			</header>
			<main>
				<Grid circles={circles} addPoint={addPoint} />
			</main>
		</div>
	)
}

export default App
