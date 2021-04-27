import Welcome from "./Welcome";
import HelloWorld from "./HelloWorld";
import Comment from "./Comment";
import Clock from "./Clock";
import Toggle from ".//Toggle";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Welcome name="Kevin"/>
      <Welcome name="Lukas"/>
      <HelloWorld />
      <Comment date={comment.date} text={comment.text} author={comment.author} />
      <Clock />
      <Toggle />
      <Footer />
    </div>
  );
}

// Test Data
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};


export default App;