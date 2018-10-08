/* =============================
=            РЕЛИЗ            =
============================= */

/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const reg = new RegExp('-?[0-9\.?]+', 'ig');
  const result = string.match(reg).sort((a, b) => a - b);

  return { min: result[0], max: result[result.length - 1] };

}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x > 1) {
    return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
  }
  return x;
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
const cache = [];

function fibonacciWithCache(x) {
  if (!cache[x]) {
    if (x === 1 || x === 2) {
      cache[x] = 1;
    } else {
      cache[x] = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
    }
  }
  return cache[x];
}
/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  const rows = Math.ceil(max / cols);
  let result = '';
  let elem = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      elem = i + (j * rows);
      if (elem >= max) {
          return result += `${elem}`.padStart(2);
      }
      if (j === (cols - 1)) {
            result += `${elem}`.padStart(2);
            continue;
        }
      result += `${elem}`.padStart(2) +' ';
    }
    result += '\n';
  }
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let tmp = 1;
  let result = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] === input[i]) {
      tmp++;
      continue;
    }
    if (tmp > 1) {
      result += input[i] + tmp;
      tmp = 1;
      continue;
    }
    result += input[i];
  }
  return result;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};

/* =====  End of РЕЛИЗ  ====== */

/* ========================================
=            НЕ ВОШЛО В РЕЛИЗ            =
======================================== */

// /**
//  * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
//  * пользователь вводит числа в консоль.
//  * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
//  * Для общения с пользователем используйте window.prompt.
//  */


/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
// function guessNumberA() {}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
// function guessNumberB() {}

/* =====  End of НЕ ВОШЛО В РЕЛИЗ  ====== */

