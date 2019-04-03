import _ from 'lodash'
import './css/index.css'
// import logo from './assets/img/logo.png';
import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  // element.classList.add('hello');
  // 将图像添加到我们现有的 div。
//  let myIcon = new Image();
//  myIcon.src = logo;
//  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      printMe();
   })
 }