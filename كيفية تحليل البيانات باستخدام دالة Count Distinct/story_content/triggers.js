function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Pf0pHjpSFC":
        Script1();
        break;
      case "6fCAqoGVE9C":
        Script2();
        break;
      case "5sYAAt28t83":
        Script3();
        break;
      case "6GaMHev62US":
        Script4();
        break;
      case "6nLdaYitcfI":
        Script5();
        break;
      case "6CW15ILK4K4":
        Script6();
        break;
      case "6VGTDn9lTwK":
        Script7();
        break;
      case "5pcqVvEGD76":
        Script8();
        break;
      case "5pwMwy7dQu2":
        Script9();
        break;
      case "6JTZOM2uXKD":
        Script10();
        break;
      case "6regby12fGU":
        Script11();
        break;
      case "6RieHoOipuf":
        Script12();
        break;
      case "5duVfpz46U0":
        Script13();
        break;
      case "6IK1P6YtBHX":
        Script14();
        break;
      case "6CI3f0kCtdf":
        Script15();
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
const target = object('5Y63KcUs1uS');
const duration = 750;
const easing = 'ease-out';
const id = '6Ogkg8PmM6S';
const shakeAmount = 2;
const delay = 0;
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
const target = object('6TLwLmIhnMm');
const duration = 750;
const easing = 'ease-out';
const id = '5xge0hmFItC';
const shakeAmount = 2;
const delay = 1000;
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
