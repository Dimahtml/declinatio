import React, {useState} from 'react';
import { getDeclensionNumber, getFinalWord } from './utils';
import './App.css';

function App() {
  const [initialWord, setInitialWord] = useState('');
  const [casus, setCasus] = useState('0');
  const [finalWord, setFinalWord] = useState('');
  const [gender, setGender] = useState('');

  const declentionNumber = getDeclensionNumber(initialWord);

  const onSubmitFormHandler = (initialWord, declentionNumber, casus, evt) => {
    const finalWord = getFinalWord(initialWord, declentionNumber, casus, evt);
    setFinalWord(finalWord);
  }
  
  return (
    <div className="App">
      <fieldset className="main-fieldset">
        <form className="main-form">
          <p>Введите существительное в единственном числе в именительном падеже</p>
          <input
            className="main-input"
            type="text"
            value={initialWord}
            onChange={(evt) => setInitialWord(evt.target.value)}
          />

          <p className="casus-subtitle">Выберите падеж</p>
          <select
            className="main-select"
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

          <section className="gender">
            <h3 className="gender__header">Для правильного склонения этого слова укажите его род</h3>
            <label className="gender__label" htmlFor="gender-male">
              <input className="gender__input" type="radio" name="gender" value="male" id="gender-male" onChange={() => {setGender('male')}}/>
              Мужской
            </label>
            <label className="gender__label" htmlFor="gender-female">
              <input className="gender__input" type="radio" name="gender" value="female" id="gender-female" onChange={() => {setGender('female')}} />
              Женский
            </label>
          </section>

          

          <button
            className="submit-button"
            type="submit"
            onClick={(evt) => onSubmitFormHandler(initialWord, declentionNumber, casus, evt)}
          >
            Показать результат
          </button>

          <p className="answer-subtitle">Ответ:</p>
          <h2 className="answer-header">{finalWord}</h2>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
