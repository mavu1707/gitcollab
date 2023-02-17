import './App.css';
import RecipeCard from './components/RecipeCard';
import './recipes.css';

function App() {
  return (
    <div id="container">
      <header>
        <h1>Oppskrifter</h1>
      </header>
      <main>
        <RecipeCard title="Pizza" ingress="Italiensk pizza" />

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
