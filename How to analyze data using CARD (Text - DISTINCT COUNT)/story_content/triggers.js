function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Ujuxs6fKOU":
        Script1();
        break;
      case "65eawGCrcdU":
        Script2();
        break;
      case "5zmshzEhwTp":
        Script3();
        break;
      case "6pxBAdG3ICf":
        Script4();
        break;
      case "6YwSigSunAj":
        Script5();
        break;
      case "629FMEiUNzr":
        Script6();
        break;
      case "6WCw2uVGCUn":
        Script7();
        break;
      case "6PjthS1u2Wi":
        Script8();
        break;
      case "5bvNpaWIXV1":
        Script9();
        break;
      case "5z1J6amCmeP":
        Script10();
        break;
      case "5fn7awZQJUF":
        Script11();
        break;
      case "6Rn5WJTQTai":
        Script12();
        break;
      case "5kFppLqhnB2":
        Script13();
        break;
      case "5rkwZhEIk4o":
        Script14();
        break;
      case "5VFQnCpavJn":
        Script15();
        break;
      case "6LBxNhEmvZa":
        Script16();
        break;
      case "6UQzMFQ5hcm":
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
