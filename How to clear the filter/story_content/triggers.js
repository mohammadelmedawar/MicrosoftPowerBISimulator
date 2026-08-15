function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6AYDSv25oki":
        Script1();
        break;
      case "6JqxjlTARxJ":
        Script2();
        break;
      case "5zu5lwZR4T7":
        Script3();
        break;
      case "6INKCbcCQaB":
        Script4();
        break;
      case "6XbgJbcbYX3":
        Script5();
        break;
      case "5VJKojlTSNO":
        Script6();
        break;
      case "6lwsqFOT5A9":
        Script7();
        break;
      case "6dkKBtRfcuQ":
        Script8();
        break;
      case "6NecOq1fYpM":
        Script9();
        break;
      case "6WgY5n6tWGO":
        Script10();
        break;
      case "6oVmagJvH15":
        Script11();
        break;
      case "6F36krJCibj":
        Script12();
        break;
      case "6SEGZK88twP":
        Script13();
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
const target = object('5qJzbPpwPDc');
const duration = 750;
const easing = 'ease-out';
const id = '5slVwBhhJSe';
const shakeAmount = 2;
const delay = 500;
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
const target = object('6CcnmGyJDGe');
const duration = 750;
const easing = 'ease-out';
const id = '5slVwBhhJSe';
const shakeAmount = 2;
const delay = 500;
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
