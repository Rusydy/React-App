import React from "react"
import Joke from "./components/Joke_raw" // how to access it if it's initialize in a folder before this file?
import JokeData from "./JokesData"

function Jokes() {
    const JokesComponents = JokeData.map(joke => <Joke question={joke.question} punchline={joke.punchLine} />)

    return (
        <div>
            {JokesComponents}
        </div>
    )
}

export default Jokes