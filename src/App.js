import styled from 'styled-components';
import { useState } from 'react';

const TextOutput = styled.header`
  width: 500px;
  height: 300px;

  border-width: 1px;
  border-color: #000;
  border-style: dashed;

  overflow-y: auto;
  word-wrap: break-word;

  display: block;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
`;

const TextInput = styled.footer`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

function App() {
  const [names, setNames] = useState([{ id: 0, text: '' }]);
  const [nextId, setNextId] = useState(1);
  const [nextText, setNextText] = useState('');

  const onchangeHandle = (e) => {
    setNextText(e.target.value);
  };

  const onkeydownHandle = (e) => {
    if (e.key === 'Enter') {
      const nextNames = names.concat({
        id: nextId,
        text: nextText,
      });
      setNames(nextNames);
      setNextId(nextId + 1);
      setNextText('');
    }
  };

  return (
    <div>

      <TextOutput>
        {names.map((name) => (
          <div key={name.id}>{name.text}</div>
        ))}
      </TextOutput>

      <TextInput>
        <input
          type="text"
          size="70"
          value={nextText}
          onChange={onchangeHandle}
          onKeyDown={onkeydownHandle}/>
      </TextInput>

    </div>
  );
}

export default App;
