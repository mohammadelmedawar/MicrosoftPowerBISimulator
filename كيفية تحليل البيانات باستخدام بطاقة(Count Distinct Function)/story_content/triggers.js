function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XVkQmIDX8u":
        Script1();
        break;
      case "5pPWxtgmnAL":
        Script2();
        break;
      case "6hUj9VjCcRH":
        Script3();
        break;
      case "63jxvgS7wLd":
        Script4();
        break;
      case "5jLxLROWx6k":
        Script5();
        break;
      case "6ISseebnuoS":
        Script6();
        break;
      case "5cukTJyUGCU":
        Script7();
        break;
      case "5oDDeG6W3V1":
        Script8();
        break;
      case "68TvB1AptgG":
        Script9();
        break;
      case "6Sc8nBNynXE":
        Script10();
        break;
      case "6UbD0Hztbq0":
        Script11();
        break;
      case "6hRHhXAbyZg":
        Script12();
        break;
      case "6aXcPU44oIY":
        Script13();
        break;
      case "6iEGzwUMgs7":
        Script14();
        break;
      case "6XDdLD7V6Ms":
        Script15();
        break;
      case "5uYRZ50y1Vz":
        Script16();
        break;
      case "5bZwCUhDgpK":
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
const target = object('6G4s8JNCjsA');
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
const target = object('5ZzaQkVVT37');
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
