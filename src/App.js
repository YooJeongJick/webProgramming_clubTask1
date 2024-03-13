import './App.css';
import { useState } from "react";

function App() {

  const [names, setNames] = useState([
    {id : 0, text : ''}
  ]);
  const [nextId, setNextId] = useState(1);
  const [nextText, setNextText] = useState('');

  const onchangeInput = e => {
    setNextText(e.target.value);
  }

  const onkeydownInput = e => {
    if (e.key === 'Enter') {
      const nextNames = names.concat({
        id : nextId,
        text : nextText,
      });
      setNames(nextNames);
      setNextId(nextId + 1);
      setNextText('');
    }
  }

  return (
    <div>
      <header id="textOutput">
        {names.map(name => (
          <div key={name.id}>
            {name.text}
          </div>
        ))}
      </header>
      <footer>
        <input type="text" size="70" id="textInput"
        value={nextText}
        onChange={onchangeInput}
        onKeyDown={onkeydownInput}>
        </input>
      </footer>
    </div>
  );
}

export default App;
