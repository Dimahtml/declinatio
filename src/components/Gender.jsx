import React, {useState} from 'react';

export function Gender({ onRadioChangeHandler, gender }) {

  return (
    <section className="gender">
      <h3 className="gender__header">Для правильного склонения этого слова укажите его род</h3>
      <label className="gender__label" htmlFor="gender-male">
        <input  
          className="gender__input"
          type="radio"
          name="gender"
          value="male"
          id="gender-male"
          checked={gender === "male"}
          onChange={onRadioChangeHandler}/>
        Мужской
      </label>
      <label className="gender__label" htmlFor="gender-female">
        <input
          className="gender__input"
          type="radio"
          name="gender"
          value="female"
          id="gender-female"
          checked={gender === "female"}
          onChange={onRadioChangeHandler} />
        Женский
      </label>
    </section>
  );
}
