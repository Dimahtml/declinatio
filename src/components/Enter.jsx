import React from 'react';

function Enter({ initialWord, casus, onInputChangeHandler, onSelectChangeHandler }) {

  return (
    <section className="enter">
      <h4>Введите существительное в единственном числе в именительном падеже</h4>
      <input
        className="main-input"
        type="text"
        value={initialWord}
        onChange={onInputChangeHandler}
      />
      <p className="casus-subtitle">Выберите падеж</p>
      <select
        className="main-select"
        name="select"
        value={casus}
        onChange={onSelectChangeHandler}
      >
        <option value="0">Именительный</option>
        <option value="1">Родительный</option>
        <option value="2">Дательный</option>
        <option value="3">Винительный</option>
        <option value="4">Творительный</option>
        <option value="5">Предложный</option>
      </select>
    </section>
  );
}

export { Enter };
