function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LgvdY6465r":
        Script1();
        break;
      case "6jwwu2CuSP5":
        Script2();
        break;
      case "66ik9KFtnLe":
        Script3();
        break;
      case "6QOtKqiyyAZ":
        Script4();
        break;
      case "6US2GLc6zRO":
        Script5();
        break;
      case "5rC4ZsbjXI7":
        Script6();
        break;
      case "6Vq6il02H4V":
        Script7();
        break;
      case "6jt01QjOsLR":
        Script8();
        break;
      case "6g1pnFlqOWi":
        Script9();
        break;
      case "6LGE8kGgRsI":
        Script10();
        break;
      case "5aD6O7ld6R8":
        Script11();
        break;
      case "5YeXnItC4AV":
        Script12();
        break;
      case "6BrsW0U0GBw":
        Script13();
        break;
      case "6bqyt5vhn9N":
        Script14();
        break;
      case "5ikTtkoaaiX":
        Script15();
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
const target = object('6ViQPRWcWe2');
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

window.Script2 = function()
{
  player.once(() => {
const target = object('6HLsFkqlTJH');
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

};
