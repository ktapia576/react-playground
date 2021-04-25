import Footer from "./Footer";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name="Kevin"/>
      <p> Hello World! </p>
      <ul> 
        <li>This is test </li>
        <li>I like rock climbing</li>
      </ul>
      <Footer />
    </div>
  );
}

export default App;