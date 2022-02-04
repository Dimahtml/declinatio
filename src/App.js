import React, {useState} from 'react';
import { getDeclensionNumber, getFinalWord } from './utils';
import './App.css';

function App() {
  const [initialWord, setInitialWord] = useState('');
  const [casus, setCasus] = useState('0');
  const [finalWord, setFinalWord] = useState('');

  const declentionNumber = getDeclensionNumber(initialWord);

  const onSubmitFormHandler = (initialWord, declentionNumber, casus, evt) => {
    const finalWord = getFinalWord(initialWord, declentionNumber, casus, evt);
    setFinalWord(finalWord);
  }
  
  return (
    <div className="App">
      <fieldset>
        <form>
          <p>Введите существительное</p>
          <input
            type="text"
            value={initialWord}
            onChange={(evt) => setInitialWord(evt.target.value)}
          />
          <p>Выберите падеж</p>

          <select
            defaultValue={casus}
            name="select"
            onChange={(evt) => setCasus(evt.target.value)}
          >
            <option value="0">Именительный</option>
            <option value="1">Родительный</option>
            <option value="2">Дательный</option>
            <option value="3">Винительный</option>
            <option value="4">Творительный</option>
            <option value="5">Предложный</option>
          </select>

          <p></p>

          <button
            type="submit"
            onClick={(evt) => onSubmitFormHandler(initialWord, declentionNumber, casus, evt)}
          >
            Показать результат
          </button>

          <p>Ответ:</p>
          <h2>{finalWord}</h2>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
