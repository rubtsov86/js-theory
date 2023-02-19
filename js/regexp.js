// const regex = new RegExp("шаблон", "флаги");
// const rexex1 = /шаблон/флаги

// \n - перенос строки
// \t - знак табуляции
// . - любой символ, кроме переноса строки
// \d - цифровой символ [0...9]
// \D - не число
// \s - символ пробела [  \n\t]
// \S - не пробельный символ
// \w - символьный класс слово - цифры или анг буквы или символ нижнего подчеркивания
// \W - не слово
// [qwe] - любой символ из этого набора
// [^qwe] - исключающий символ - все кроме символов из этого набора
// [a-c] - диапазон от и до кодов этих символов

// const regexp = /Сергей/;
// const str = "sadsadfd  sdfdsfdsfds Сергей dfsdsfds sdfdsfds ";

// const regexp = /Сергей\./;
// const str = "sadsadfd  sdfdsfdsfds Сергей. dfsdsfds sdfdsfds ";

// const regexp = /\d\d/;
// const str = "sadsadfd  sdfdsfdsfds Сергей. dfsdsfds 55 sdfdsfds ";

// const regexp = /\D\D/;
// const str = "sadsadfd  sdfdsfdsfds Сергей. dfsdsfds 55 sdfdsfds ";

// квантификаторы

// жадные - стараются наибольшее количество раз повторить
// {n}  - n раз повториться
// {m,n} - повторить от m до n - захватит макс
// {m,} - повторить от m до бесконечности
// ? - {0,1}
// * - {0,}
// + - {1,}

// ленивые - стараются наименьшее количество раз повторить
// {m,n}? - ленивый квантификатор - повторить от m до n - захватит мин
// {m,}?
// ??
// *?
// +?

// const regexp = /\d{2}\.\d{2}\.\d{4}/;
// const str = "сегодня 15.02.2023.";

// const regexp = /\d{3,4}/;
// const str = "у меня только 50, не хватает еще 100.";

// const regexp = /\d{3,4}?/;
// const str = "у меня только 50, не хватает еще 100000.";

// const regexp = /colou?r/;
// const str = "what color is the cat?";

// const regexp = /\d*/;
// const str = "0123456789";

// const regexp = /\d*?/;
// const str = "0123456789";

// const result = str.match(regexp);

// const regexp = /\s*,\s*/;
// const str = "0, 1,2,3,  4";

// const result = str.split(regexp);

// const regexp = /\d{6}/;
// const str = "... dsadsa fdsdsfdsf sasadsad 123456 gfdgfdg";

// const result = str.search(regexp);
// console.log(result);

// флаги
// g - глобальный поиск
// s -включает режим, в котором любой символ, даже /n
// i - регистронезависимый поиск
// y - для поиска на заданной позиции lastIndex
// u - поддержка юникода и юникодных свойств \p{}
// m - многострочный поиск

// const regexp = /./g;
// const str = "a\nb";

// const regexp = /\p{Sc}/gu;
// const str = "$dsadsad $sadsadsa";

// const result = Array.from(str.matchAll(regexp));
// console.log(result);

// якоря

// ^ - начало текста или строки, если есть флаг m
// $ - конец текста или строки, если есть флаг m
// \b - граница слова между:
// 1) ^ и \w
// 2) \w и \W
// 3) \W и \w
// 4) \w и $
// \B - не граница слова
// test - метод RegExp для проверки присутствия совпадения

// const regexp = /^[^\s]+/g;
// const str = 'sadsad dsadsadsa dssadasdsa sdsd sdsdsadsa adssadsa';

// const result = str.match(regexp);
// console.log(result);

// скобочные группы и обратные выражения

// () - скобочная группа
// (:?) - скобочная группа исключенная из запоминания
// \N - обратная ссылка в шаблоне, где N - номер скобочной группы
// (?<name>) - именованная скобочная группа, где name - имя скобочной группы
// k<name> - обратная ссылка в скобочной группе, где name - имя скобочной группы

// replace - метод замены в String, который имеет ряд спецсимволов
// $& - вставляет все найденное совпадение
// $` - вставляет часть строки до совпадения
// $' - вставляет часть строки после совпадения
// $N - обратная ссылка в шаблоне, где N - номер скобочной группы
// $<name> - обратная ссылка в шаблоне, где name - имя скобочной группы

// // const regexp = /(\w+)\s(\w+)/;
// const regexp = /(?<first_name>\w+)\s(?<last_name>\w+)/;
// const str = 'меня зовут Rubtsov Sergiy. А тебя?';

// // const result = str.match(regexp);
// const result = str.replace(regexp, '$<last_name>');
// console.log(result);

// альтернация

// | - или (альтернация)
// X(?=Y) - находит X, если за ним следует Y (позитивная опережающая проверка)
// X(?!Y) - находит X, если за ним не следует Y (негативная опережающая проверка)
// (?<=Y)X - X, если следует за Y (позитивная ретроспективная проверка)
// (?<!Y)X - X, если не следует за Y (негативная ретроспективная проверка)

// const regexp = /b|d/g;
// const str = 'abcde';

// const regexp = /(?:[01]\d|2[0-3]):[0-5]\d/g;
// const str = 'Завтра в 09:20. Обед в 13:15. Ужин в 19:10.';

// const result = str.match(regexp);
// console.log(result);
