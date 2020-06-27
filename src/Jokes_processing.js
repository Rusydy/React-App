import React from "react"
import Joke from "./components/Joke_raw" // how to access it if it's initialize in a folder before this file?
import JokeData from "./JokesData"

function Jokes() {

    const JokesComponents = JokeData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            {JokesComponents}
        </div>
    )
}

export default Jokes