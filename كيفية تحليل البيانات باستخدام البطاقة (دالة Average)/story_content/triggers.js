function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6D8ubfnEGFK":
        Script1();
        break;
      case "6Yh2N6aukAo":
        Script2();
        break;
      case "5qZrNLtylmn":
        Script3();
        break;
      case "5Y71974txMC":
        Script4();
        break;
      case "5j2jj9u7y5k":
        Script5();
        break;
      case "5X2Ows49HOY":
        Script6();
        break;
      case "6gmcwiz53C2":
        Script7();
        break;
      case "5Y9ImoTclwp":
        Script8();
        break;
      case "6SlvWx8J8Ul":
        Script9();
        break;
      case "6GWQl1pjHs3":
        Script10();
        break;
      case "5xuxaM37U8M":
        Script11();
        break;
      case "6q7t5QmvNua":
        Script12();
        break;
      case "5kUePQy3iLo":
        Script13();
        break;
      case "61xsteTMZm6":
        Script14();
        break;
      case "6nkh3IUSoyw":
        Script15();
        break;
      case "6OQ8b48G2B5":
        Script16();
        break;
      case "6mnjOFX07pM":
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
