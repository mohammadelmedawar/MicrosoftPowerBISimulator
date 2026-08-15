function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pr3TI60Ugl":
        Script1();
        break;
      case "6YbQMdM9Bdt":
        Script2();
        break;
      case "5lv2jXayUTw":
        Script3();
        break;
      case "6NjnVL2a0P3":
        Script4();
        break;
      case "6foAvm8J2xu":
        Script5();
        break;
      case "5k2Gd6SR2CM":
        Script6();
        break;
      case "6etk4K4kkO0":
        Script7();
        break;
      case "6BI2Fg357XF":
        Script8();
        break;
      case "6HsuRLom8GN":
        Script9();
        break;
      case "5nQasW8d6Aj":
        Script10();
        break;
      case "5hTst3Al2CZ":
        Script11();
        break;
      case "69pcRv8Fd6O":
        Script12();
        break;
      case "61nntj0hCoQ":
        Script13();
        break;
      case "6IMsypQmUo8":
        Script14();
        break;
      case "5ieHeqFbWcn":
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
const target = object('5Y63KcUs1uS');
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
const target = object('6TLwLmIhnMm');
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
