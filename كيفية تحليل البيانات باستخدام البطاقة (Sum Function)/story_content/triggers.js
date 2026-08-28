function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hxhHkbTlHQ":
        Script1();
        break;
      case "6DlK3ijvQn8":
        Script2();
        break;
      case "5oaHheN338F":
        Script3();
        break;
      case "6heLtgylCmi":
        Script4();
        break;
      case "628OBrtopsA":
        Script5();
        break;
      case "67A7Dtqt0XU":
        Script6();
        break;
      case "6Gg2MCNPA3M":
        Script7();
        break;
      case "5gGTi0qEu6g":
        Script8();
        break;
      case "5y2xGojnqug":
        Script9();
        break;
      case "5YQr0J0DYQW":
        Script10();
        break;
      case "6GZ9da6tURI":
        Script11();
        break;
      case "6FOg8Uvzqld":
        Script12();
        break;
      case "5dNzLRXaIfw":
        Script13();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('5srNa85C3Lt');
const duration = 750;
const easing = 'ease-out';
const id = '60ab20zto6q';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6kNpZgqK62K');
const duration = 750;
const easing = 'ease-out';
const id = '6kbEeVwG6Kd';
const shakeAmount = 2;
const delay = 1250;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
