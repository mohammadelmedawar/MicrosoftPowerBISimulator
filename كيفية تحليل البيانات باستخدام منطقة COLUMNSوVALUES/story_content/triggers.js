function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rWzkWfbHdT":
        Script1();
        break;
      case "6q7xpH8IaHH":
        Script2();
        break;
      case "5onefTIJ4Iy":
        Script3();
        break;
      case "6PnfB9sBFJf":
        Script4();
        break;
      case "5uX4c78EVSa":
        Script5();
        break;
      case "5wkIAAMvIcb":
        Script6();
        break;
      case "6QyNLvxHNKz":
        Script7();
        break;
      case "6Oa4M9BseZQ":
        Script8();
        break;
      case "6Lhqvj22CPJ":
        Script9();
        break;
      case "63EqtMXAJap":
        Script10();
        break;
      case "5kqiRQUS4HR":
        Script11();
        break;
      case "6f6ZQs6nryE":
        Script12();
        break;
      case "6WBx3sbp6H0":
        Script13();
        break;
      case "6RKFccHlKkG":
        Script14();
        break;
      case "5rR4M2UgqTh":
        Script15();
        break;
      case "5lVdjZ1IQPV":
        Script16();
        break;
      case "6aIBlvonSQO":
        Script17();
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
const target = object('67M7TyIsU9m');
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

window.Script2 = function()
{
  player.once(() => {
const target = object('6C9X6JuoAO3');
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

window.Script3 = function()
{
  player.once(() => {
const target = object('5WUPg3EnTTX');
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

window.Script4 = function()
{
  player.once(() => {
const target = object('5WDldYQqgvI');
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
