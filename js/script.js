/*  
Мини проект.
1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.

2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.

3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.

4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. 

5. Добавьте во все действия следующее - в изображении img-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.
*/

const images = document.querySelectorAll('.img-min');
let count = 0;

const image = document.querySelector('.div-max img');

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function nextFunction() {
  images.forEach((item) => {
    item.classList.remove('active-img');
  });

  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }

  images[count].classList.add('active-img');
  image.src = `img/${count + 1}.png`;
}

function prevFunction() {
  images.forEach((item) => {
    item.classList.remove('active-img');
  });

  if (count > 0) {
    count--;
  } else {
    count = images.length - 1;
  }

  images[count].classList.add('active-img');
  image.src = `img/${count + 1}.png`;
}

function resetFunction() {
  images.forEach((item) => {
    item.classList.remove('active-img');
  });

  count = 0;
  images[count].classList.add('active-img');
  image.src = `img/${count + 1}.png`;
}