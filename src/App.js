import { Multiplication } from "./components/Multiplication";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
      <Post 
        data='2022-05-15'
      />

      <Multiplication 
        a={3}
        b={6}
      />
    </div>
  );
}

export default App;
