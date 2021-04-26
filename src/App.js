import Welcome from "./Welcome";
import HelloWorld from "./HelloWorld";
import Comment from "./Comment";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Welcome name="Kevin"/>
      <Welcome name="Lukas"/>
      <HelloWorld />
      <Comment date={comment.date} text={comment.text} author={comment.author} />
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