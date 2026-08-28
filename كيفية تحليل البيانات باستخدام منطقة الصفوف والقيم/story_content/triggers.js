function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pHhOe1FODf":
        Script1();
        break;
      case "5WT10xRbGsT":
        Script2();
        break;
      case "5wyx2RxxEny":
        Script3();
        break;
      case "5o4GscFFFfR":
        Script4();
        break;
      case "66NUea8ncqk":
        Script5();
        break;
      case "5bmty03Sd3r":
        Script6();
        break;
      case "6WMiGwepOQN":
        Script7();
        break;
      case "6qTjSdxtE4y":
        Script8();
        break;
      case "5sZYRIcvcv9":
        Script9();
        break;
      case "6Z376KKzT77":
        Script10();
        break;
      case "6JLXfhwPMYd":
        Script11();
        break;
      case "5hb1wtbj2JJ":
        Script12();
        break;
      case "5ynJewOozNS":
        Script13();
        break;
      case "6k9XTd3lbBS":
        Script14();
        break;
      case "65R3ZW8AKhm":
        Script15();
        break;
      case "66uy8ze0IOm":
        Script16();
        break;
      case "6iEqGTFhhnA":
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
