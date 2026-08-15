function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eFMaZGlcOT":
        Script1();
        break;
      case "65v50pmYi9r":
        Script2();
        break;
      case "6BbWfS7H7Je":
        Script3();
        break;
      case "5zpxQItKvmv":
        Script4();
        break;
      case "6aACOreaAVn":
        Script5();
        break;
      case "5uOe8x2cKiL":
        Script6();
        break;
      case "6G9oETtji3k":
        Script7();
        break;
      case "5V7Df8pLZXj":
        Script8();
        break;
      case "5jJHqHxI2RS":
        Script9();
        break;
      case "5s9D6WMfhYH":
        Script10();
        break;
      case "6iOrc4hFEHV":
        Script11();
        break;
      case "5rFArvICvyB":
        Script12();
        break;
      case "5YSGC01QrJf":
        Script13();
        break;
      case "5ojxfd2YdBR":
        Script14();
        break;
      case "5XoOP0eCk3X":
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
