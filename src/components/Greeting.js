import React from "react"

function Greeting(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) timeOfDay = "morning";
    else if (hours >= 12 && hours <= 17) timeOfDay = "afternoon";
    else timeOfDay = "night";

    return (
    <h2>Good {timeOfDay}!</h2>
    )
}

export default Greeting