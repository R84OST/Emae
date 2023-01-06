// Создаем метель
let boxShadow = ''
for (let i = 0; i <= 2000; i++) {
    px = (Math.random() < 0.5) ? '-' : '';
    py = Math.random() < 0.5 ? "-" : "";
    x = Math.floor((Math.random() * window.innerWidth) + 1);
    y = Math.floor((Math.random() * window.innerHeight) + 1);
    s = Math.floor((Math.random() * 2) - 1);

    boxShadow += px + x + "px "
        + py + y + " px 0 " + s + " px #fff,";
}
boxShadow = boxShadow.slice(0, -1);
stars.style.boxShadow = boxShadow;

// ================================

let priz = document.querySelector('#box')
let boxPriz = document.querySelectorAll('#container div img')
for (let i = 0; i < boxPriz.length; i++) {
    boxPriz[i].onclick = function () {
        priz.style.fontSize = `25px`;

        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/kot.jpeg')
            priz.innerHTML = `С Новым годом поздравляю
    И от всей души желаю
    Веселиться и смеяться,
    Ни на что не обижаться,
    Жить легко и без забот
    Весь грядущий новый год.`
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/lev.jpg')
            priz.innerHTML = `С Новым годом! С новым счастьем!
    Смеха, мира и добра!
    Пусть обходят все ненастья,
    Жизнь одарит вас сполна!.`;
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/panda.jpg')
            priz.innerHTML = `С Новым годом поздравляю
    И от всей души желаю
    Веселиться и смеяться,
    Ни на что не обижаться,
    Жить легко и без забот
    Весь грядущий новый год.`
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/sova.jpg')
            priz.innerHTML = `С Новым годом! С новым счастьем!
    Смеха, мира и добра!
    Пусть обходят все ненастья,
    Жизнь одарит вас сполна!.`
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/zayac.jpg')
            priz.innerHTML = `С Новым годом поздравляю
    И от всей души желаю
    Веселиться и смеяться,
    Ни на что не обижаться,
    Жить легко и без забот
    Весь грядущий новый год.`
    }
}