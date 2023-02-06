import React from 'react'
import logo from '../react-logo.png'

const Nav = (props) => {

  const bgColor = props.mode ? "#cccccc" :" #222222"


  const styles= {
    backgroundColor: bgColor


  }

  return (
    <div>

        <header>
          <nav style={styles} >
            <img src={logo} alt="react-logo" width="150px"/>
            <h2>ReactFacts</h2>
            <h3>React Course- Project1</h3>

            <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.handleClick}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            
          </nav>
        </header>
    
    </div>
  )
}

export default Nav