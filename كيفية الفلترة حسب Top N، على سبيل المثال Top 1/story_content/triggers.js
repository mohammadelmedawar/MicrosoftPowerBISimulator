function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6WoTpLQyp3M":
        Script1();
        break;
      case "6c3IK5dJbyk":
        Script2();
        break;
      case "5YAVGEWntbj":
        Script3();
        break;
      case "5zULkyLQ43d":
        Script4();
        break;
      case "6dNQ2zdU3Ko":
        Script5();
        break;
      case "5qJ8ipJNwPE":
        Script6();
        break;
      case "5YfXfsOjhVN":
        Script7();
        break;
      case "5bnbt8FTji5":
        Script8();
        break;
      case "64aY2Fs5Yys":
        Script9();
        break;
      case "6AubaMh88r2":
        Script10();
        break;
      case "5lfwiomlimR":
        Script11();
        break;
      case "6JlLuRadO92":
        Script12();
        break;
      case "6VVx2kUNkKf":
        Script13();
        break;
      case "6kPLFHVAtqo":
        Script14();
        break;
      case "5ks3YE7yopk":
        Script15();
        break;
      case "6p8qlkspUhM":
        Script16();
        break;
      case "64pZ9WrP55t":
        Script17();
        break;
      case "5XoYPmGwtRb":
        Script18();
        break;
      case "6m6ASHDxHuJ":
        Script19();
        break;
      case "6TQ4iSAZhVt":
        Script20();
        break;
      case "6XdPcL0s9DN":
        Script21();
        break;
      case "6kMAWhn6csK":
        Script22();
        break;
      case "5gfteHKaWTc":
        Script23();
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
const target = object('6iMT9OgmdAC');
const duration = 750;
const easing = 'ease-out';
const id = '6Pj9oj5SFMH';
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
const target = object('5xLwwev5Jxe');
const duration = 750;
const easing = 'ease-out';
const id = '5g7gVO2qksx';
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

};
