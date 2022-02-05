const SECOND_DECLENSION_WORDS = ['гвоздь', 'голубь', 'дождь', 'лебедь'];

// { 1, 2, 3 } - склонения согласно правилам русского языка.
// { 23 } - 2 или 3 склонение. требует от пользователя указать род.
// { 4 } - несклоняемые слова. во всех падежах начальная форма.
// { 5 } - содержит недопустимые символы (любые кроме кириллицы).

export const getDeclineNumber = (word) => {
  const regexDecline1 = /[а,я]$/;
  const regexDecline2 = /[б,в,г,д,е,ж,з,к,л,м,н,о,п,р,с,т,ф,х,ц,ч,ш,щ]$/;
  const regexDecline3 = /чь$|шь$|щь$|ость$|бь$|вь$|дь$|зь$|сь$|ть$|жь$|рь$/;
  const regexDecline4 = /у$|ъ$|э$|ю$|ё$/;
  const regexDecline2or3 = /ь$/;
  const regexDecline5 = /[А-Яа-я,ё,Ё]$/;

  if (!regexDecline5.test(word)) {
    return 5;
  } else if (regexDecline1.test(word)) {
    return 1;
  } else if (regexDecline2.test(word) || SECOND_DECLENSION_WORDS.includes(word)) {
    return 2;
  } else if (regexDecline3.test(word)) {
    return 3;
  } else if (regexDecline4.test(word)) {
    return 4;
  } else if (regexDecline2or3.test(word)) {
    return 23;
  }
}
