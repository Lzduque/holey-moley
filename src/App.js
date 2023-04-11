import './App.css'
import Grid from './Grid'
import Score from './Score'
import {useState} from 'react'

const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function App() {
	const [score, setScore] = useState(0)

	return (
		<div className='block'>
			{/* App makes the score state and set, passes down both*/}
			{/* Header / Score get the state | main / Grid gets the set*/}
			<header className='items-baseline	flex justify-center	'>
				<h1 className='text-center block text-3xl	font-bold	mx-5 my-0'>
					Holey Moley!
				</h1>
				<Score score={score} className='block'></Score>
				{/* Score carries the score state */}
			</header>
			<main>
				{/* Main makes the active state and set, passes down state to Circles -> since main is not it's own entity, I think it needs to be in Grid*/}
				{/* the set active is triggered here by a timer, choosing a random number every one second*/}
				<Grid circles={circles} score={score} setScore={setScore} />
				{/* Grid is going to render the circles*/}
				{/* Every circle is going to carry their own number (circles.map is the key/circle number*/}
				{/* they are also going to carry the active state changed by main*/}
				{/* every time the active state changes, compare the key with the active,*/}
				{/* if it is the same set to red -> which enables clickable and the setScore function,*/}
				{/* otherwise set it back to black,*/}
			</main>
		</div>
	)
}

export default App
