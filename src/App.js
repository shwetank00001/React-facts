import React from 'react'
import Nav from "./Components/Nav";
import Main from "./Components/Main";
function App() {

  const [darkMode, setDarkMode] = React.useState(true)

  function addDarkMode(){
    setDarkMode(function(item){
      return (!item)
    })
  }
  console.log(darkMode)

  return (
    <div>
      <Nav mode= {darkMode} handleClick={addDarkMode}/>
      <Main mode={darkMode} />
    </div>
  );
}

export default App;
