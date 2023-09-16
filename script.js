const button1 = document.getElementById('collapsible-btn1');
const button2 = document.getElementById('collapsible-btn2');
const button3 = document.getElementById('collapsible-btn3');

const content1 = document.getElementById('collapsible-content1');
const content2 = document.getElementById('collapsible-content2');
const content3 = document.getElementById('collapsible-content3');

const arrow1 = document.getElementById('button1');
const arrow2 = document.getElementById('button2');
const arrow3 = document.getElementById('button3');


button1.addEventListener('click', () => {
  if (content1.style.display === 'none' || content1.style.display === '') {
    content1.style.display = 'block';
    arrow1.style.borderBottom = '5px solid grey';
    arrow1.style.borderTop = '0';
  }
  else {
    content1.style.display = 'none';
    arrow1.style.borderBottom = '0';
    arrow1.style.borderTop = '5px solid grey';
  }
})

button2.addEventListener('click', () => {
  if (content2.style.display === 'none' || content2.style.display === '') {
    content2.style.display = 'block';
    arrow2.style.borderBottom = '5px solid grey';
    arrow2.style.borderTop = '0';
  }
  else {
    content2.style.display = 'none';
    arrow2.style.borderBottom = '0';
    arrow2.style.borderTop = '5px solid grey';
  }
})

button3.addEventListener('click', () => {
  if (content3.style.display === 'none' || content3.style.display === '') {
    content3.style.display = 'block';
    arrow3.style.borderBottom = '5px solid grey';
    arrow3.style.borderTop = '0';
  }
  else {
    content3.style.display = 'none';
    arrow3.style.borderBottom = '0';
    arrow3.style.borderTop = '5px solid grey';
  }
})
