function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5X0bCZPOm7m":
        Script1();
        break;
      case "6OtstTzcBd2":
        Script2();
        break;
      case "6iuOayaG6cA":
        Script3();
        break;
      case "6cCDdQzQPsB":
        Script4();
        break;
      case "6TA9fOmjVo9":
        Script5();
        break;
      case "6EFN7I83os1":
        Script6();
        break;
      case "6U5tfcytY8l":
        Script7();
        break;
      case "5dtp9RgiPlG":
        Script8();
        break;
      case "6SoxMIn5qFr":
        Script9();
        break;
      case "6kpLmxZy0lo":
        Script10();
        break;
      case "6MpsqinduXa":
        Script11();
        break;
      case "5f6rozrw4qo":
        Script12();
        break;
      case "5n51lTWW569":
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
