import React from 'react'

const Main = (props) => {

  const bgColor = props.mode ? "white" : "#282D35"
  const textColor = props.mode ? "black" : "white"


  const styles= {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <div style={styles} className='main'>
        <h1>
            Fun facts about Me
        </h1>
        <ul>
          <li>I bench 225.</li>
          <li>I go jim.</li>
          <li>My birthday is on 14th March.</li>
          <li>1st project using React.</li>
          <li>Will get rich.</li>
        </ul>
    </div>
  )
}

export default Main