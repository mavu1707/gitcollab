import './App.css'
import './recipes.css'
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'
import RecipePage from './components/RecipePage'
//import recipes from './resources/recipes'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'

function App() {
  const [recipes, setRecipes] = useState([])

  const getRecipes = async() =>{
    //Pass på at ID og KEY kommer fra riktig app i edmam, hvis dere har registrert at dere skal bruke recipe api så må app id og key være koblet til det og ikke food databse eller omvendt
    const response = await fetch('https://api.edamam.com/search?q=american&app_id=e1f9b3bb&app_key=90406fd0d2d61395a927a2c2350fe7dd')
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)

  
  }
  console.log("sjekk", recipes)

  useEffect(() =>{
    getRecipes()
  },[])


  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Main recipes={recipes} />} />
          <Route path=':slug' element={<RecipePage recipes={recipes} />}/>
        </Route>
      </Routes>

  );
}

export default App;
