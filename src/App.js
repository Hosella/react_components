import { Multiplication } from "./components/Multiplication";
import { Post } from "./components/Post";
import { User } from "./components/User";
import { kolya, olya, sonya } from "./utils/mockData";

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

      <User user={sonya}/>
      <User user={olya}/>
      <User user={kolya}/>
    </div>
  );
}

export default App;
