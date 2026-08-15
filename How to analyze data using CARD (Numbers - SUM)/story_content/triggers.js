function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pvoGbqBniH":
        Script1();
        break;
      case "5WPAI4QmHBv":
        Script2();
        break;
      case "5eYmUKnqtBD":
        Script3();
        break;
      case "5lMxsBMbClw":
        Script4();
        break;
      case "66wRzUmn0do":
        Script5();
        break;
      case "5rlAMkb10a8":
        Script6();
        break;
      case "6a3MkKhaC9X":
        Script7();
        break;
      case "6c3Gwmeuidc":
        Script8();
        break;
      case "6p1vkaR1IcZ":
        Script9();
        break;
      case "5o77TwWVdaT":
        Script10();
        break;
      case "5eiIvFbAYJF":
        Script11();
        break;
      case "6QuBBcDdah7":
        Script12();
        break;
      case "5rZM2NfOCbo":
        Script13();
        break;
      case "6OLEvBcVQ6Q":
        Script14();
        break;
      case "6ipcHGqieoz":
        Script15();
        break;
      case "6midkOPehW7":
        Script16();
        break;
      case "6iYMuPZZUTJ":
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
const target = object('5srNa85C3Lt');
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
