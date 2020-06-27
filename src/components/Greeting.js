import React from "react"

function Greeting(){
    const date = new Date()
    const hours = date.getHours()
    const styles = {
        fontSize: 30
    }
    let timeOfDay

    if (hours < 12){
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours <= 17){
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
    } else{
        timeOfDay = "night"
        styles.color = "#D90000"
    }

    return (
    <h2 style={styles}>Good {timeOfDay}!</h2>
    )
}

export default Greeting