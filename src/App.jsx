import { useState } from "react";
import Game from "./components/Game";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;