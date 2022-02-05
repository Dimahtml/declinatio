import React, { useState } from 'react';
import { getDeclineNumber } from './utils/getDeclineNumber';
import { getFinalWordDecline1 } from './utils/getFinalWordDecline1';
import { getFinalWordDecline2 } from './utils/getFinalWordDecline2';
import { getFinalWordDecline3 } from './utils/getFinalWordDecline3';
import { Gender } from './Gender';
import { Enter } from './Enter';
import '../App.css';

export function Form() {
  const [initialWord, setInitialWord] = useState('');
  const [casus, setCasus] = useState('0');
  const [finalWord, setFinalWord] = useState('');
  const [declineNumber, setDeclineNumber] = useState(0);
  const [gender, setGender] = useState('');

  const onSubmitFormHandler = (initialWord, declineNumber, casus, evt) => {
    evt.preventDefault();

    setDeclineNumber(getDeclineNumber(initialWord));
    setFinalWord(getFinalWordDecline1(initialWord, declineNumber, casus, gender, evt));

    if (declineNumber === 1) {
      setFinalWord(getFinalWordDecline1(initialWord, casus, gender, evt)); 
    } else if (declineNumber === 2) {
      setFinalWord(getFinalWordDecline2(initialWord, casus, gender, evt)); 
    } else if (declineNumber === 3) {
      setFinalWord(getFinalWordDecline3(initialWord, casus, gender, evt)); 
    } else if (declineNumber === 23 && gender === "male") {
      setFinalWord(getFinalWordDecline2(initialWord, casus, gender, evt));
    } else if (declineNumber === 23 && gender === "female") {
      setFinalWord(getFinalWordDecline3(initialWord, casus, gender, evt));
    } else if (declineNumber === 4) {
      setFinalWord(initialWord);
    } else if (declineNumber === 5) {
      setFinalWord('Недопустимое слово');
    }
  }

  const onInputChangeHandler = (evt) => {
    setInitialWord(evt.target.value.toLowerCase());
    setGender('');
    setFinalWord('');
    setCasus('0');
    setDeclineNumber(getDeclineNumber(initialWord));
  }

  const onSelectChangeHandler = (evt) => {
    setCasus(evt.target.value);
  }

  const onRadioChangeHandler = (evt) => {
    setGender(evt.target.value);
    setFinalWord(initialWord);
  }

  return (
    <div className="App">
      <fieldset className="main-fieldset">
        <form className="main-form">
          
          <Enter
            onInputChangeHandler={onInputChangeHandler}
            onSelectChangeHandler={onSelectChangeHandler}
            initialWord={initialWord}
            casus={casus}
          />

          <button
            className="submit-button"
            type="submit"
            onClick={(evt) => onSubmitFormHandler(initialWord, declineNumber, casus, evt)}
          >
            Показать результат
          </button>

          {declineNumber === 23
          ? <Gender onRadioChangeHandler={onRadioChangeHandler} gender={gender} />
          : ''}

          <p className="answer-subtitle">Ответ:</p>
          <h2 className="answer-header">{finalWord}</h2>
        </form>
      </fieldset>
    </div>
  );
}
