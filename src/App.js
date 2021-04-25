import Welcome from "./Welcome";
import HelloWorld from "./HelloWorld";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Welcome name="Kevin"/>
      <Welcome name="Lukas"/>
      <HelloWorld />
      <Footer />
    </div>
  );
}

export default App;