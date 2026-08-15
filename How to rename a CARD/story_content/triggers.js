function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FsU1NDiqOx":
        Script1();
        break;
      case "6opA0C8K6nO":
        Script2();
        break;
      case "5peI0DLxSKk":
        Script3();
        break;
      case "6gMpMGKVGj5":
        Script4();
        break;
      case "5lbetcG7fhM":
        Script5();
        break;
      case "5fuTZQhLC2H":
        Script6();
        break;
      case "65iW3B913Pb":
        Script7();
        break;
      case "6VOaA9wmz1Z":
        Script8();
        break;
      case "5zZSVecgTsV":
        Script9();
        break;
      case "5q4dqd3NzrL":
        Script10();
        break;
      case "68pAZtN66yR":
        Script11();
        break;
      case "6Z6k9lxdlqq":
        Script12();
        break;
      case "6HIdW6S8tzA":
        Script13();
        break;
      case "5mMJDFTod2p":
        Script14();
        break;
      case "5p9YZCZFvnN":
        Script15();
        break;
      case "6OgA3catqPm":
        Script16();
        break;
      case "5nomz6uPemi":
        Script17();
        break;
      case "6GARgPZXGNW":
        Script18();
        break;
      case "6FFPioYavPe":
        Script19();
        break;
      case "6X6fLNQuJ8d":
        Script20();
        break;
      case "6gSFecaZEcL":
        Script21();
        break;
      case "5toE0qFKKUK":
        Script22();
        break;
      case "63xcoGpbNeu":
        Script23();
        break;
      case "5yzxL2v1Dz2":
        Script24();
        break;
      case "5YvTJ1Eqxsc":
        Script25();
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
const target = object('6GfmNA3gk1y');
const duration = 750;
const easing = 'ease-out';
const id = '6FfJyAFAb3P';
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
const target = object('6VloFkKVlhu');
const duration = 750;
const easing = 'ease-out';
const id = '5of9MjnMr3R';
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
