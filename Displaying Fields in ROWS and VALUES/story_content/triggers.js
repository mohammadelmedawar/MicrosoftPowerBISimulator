function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WwPScV66TJ":
        Script1();
        break;
      case "6N3TM0PddWA":
        Script2();
        break;
      case "6UeC9QzffoD":
        Script3();
        break;
      case "6FPaweE1nNt":
        Script4();
        break;
      case "66wCsFmyOFF":
        Script5();
        break;
      case "6bOiYRJruch":
        Script6();
        break;
      case "6fg99PMAjpp":
        Script7();
        break;
      case "5vs7pWIe3cU":
        Script8();
        break;
      case "67bg5wgvBRe":
        Script9();
        break;
      case "6MEkSLX7wra":
        Script10();
        break;
      case "6hdGPxZKSyv":
        Script11();
        break;
      case "6iUuOdqtYcj":
        Script12();
        break;
      case "62g61wteLvt":
        Script13();
        break;
      case "6PvxBqsUDq2":
        Script14();
        break;
      case "5eZqPcdz6Yv":
        Script15();
        break;
      case "68lmx8enNUO":
        Script16();
        break;
      case "6WhwxcdzFuD":
        Script17();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5lS4Kj8YnRz');
const duration = 750;
const easing = 'ease-out';
const id = '5xge0hmFItC';
const shakeAmount = 2;
const delay = 1000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5iei89vNOTC');
const duration = 750;
const easing = 'ease-out';
const id = '6Ogkg8PmM6S';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6dLl2gtcfaW');
const duration = 750;
const easing = 'ease-out';
const id = '60ab20zto6q';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6Gz9PGXz9sU');
const duration = 750;
const easing = 'ease-out';
const id = '6kbEeVwG6Kd';
const shakeAmount = 2;
const delay = 1250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
