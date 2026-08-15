function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YaoAkto2XA":
        Script1();
        break;
      case "5beh198RtSO":
        Script2();
        break;
      case "6PvVyGe1TNd":
        Script3();
        break;
      case "6VdTUDovQYl":
        Script4();
        break;
      case "5k8d65fLTbm":
        Script5();
        break;
      case "5YZQ82bvRXd":
        Script6();
        break;
      case "6hn7vrDq7d2":
        Script7();
        break;
      case "6YR2oZA1j8W":
        Script8();
        break;
      case "5qKkRCBQjKV":
        Script9();
        break;
      case "6H5zPMMMZTJ":
        Script10();
        break;
      case "5vMY2Px1Lqj":
        Script11();
        break;
      case "6kIun14VMJe":
        Script12();
        break;
      case "6PlL3O2gLhJ":
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
const target = object('6aZQwIgwQPE');
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
const target = object('5epOoDxZ2kr');
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
