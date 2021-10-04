import Header from "./components/Header";
import Game from './components/Game';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header title="SUDOKU SOLVER"/>
      <main>
        <Game />
      </main>
      <Footer />
    </>
  );
}

export default App;
