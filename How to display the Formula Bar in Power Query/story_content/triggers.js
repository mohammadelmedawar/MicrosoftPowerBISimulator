function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dwKIO8NgJc":
        Script1();
        break;
      case "5tJVabVShDt":
        Script2();
        break;
      case "5bWSiVt6COk":
        Script3();
        break;
      case "5omImg4etSU":
        Script4();
        break;
      case "6Z0cGqR1wSM":
        Script5();
        break;
      case "665O99BVHXd":
        Script6();
        break;
      case "5w5DdaDvbCG":
        Script7();
        break;
      case "5hiqwuuMU8r":
        Script8();
        break;
      case "6Pt9BFSB4W9":
        Script9();
        break;
      case "6QolgKgDXZk":
        Script10();
        break;
      case "6idVUcH77ec":
        Script11();
        break;
      case "6ZmCC6QBsSR":
        Script12();
        break;
      case "6iDNJE6eIWe":
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
const target = object('6gXSngFirdJ');
const duration = 750;
const easing = 'ease-out';
const id = '5qShSNqnyTe';
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
const target = object('6FYvJPbal94');
const duration = 750;
const easing = 'ease-out';
const id = '6UuQlvh9Hwj';
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

};
