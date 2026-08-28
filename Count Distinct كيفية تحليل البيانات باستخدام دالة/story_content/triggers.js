function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6AUFfVCruwr":
        Script1();
        break;
      case "6R7xxNubFdU":
        Script2();
        break;
      case "6dv4St89zXp":
        Script3();
        break;
      case "6VbmWiw7g0i":
        Script4();
        break;
      case "5wrty02j6jd":
        Script5();
        break;
      case "5pMeuvMVIaC":
        Script6();
        break;
      case "6jjB1pUmhQF":
        Script7();
        break;
      case "5aMIqJoaliv":
        Script8();
        break;
      case "5yV3dhGLHoJ":
        Script9();
        break;
      case "5y2DnPfMEPl":
        Script10();
        break;
      case "6nfZ5IfMk2a":
        Script11();
        break;
      case "5iq6nL9ctKn":
        Script12();
        break;
      case "6Qgm9CBGsEQ":
        Script13();
        break;
      case "6V8T665SHxX":
        Script14();
        break;
      case "5UitAWm4Ss7":
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
