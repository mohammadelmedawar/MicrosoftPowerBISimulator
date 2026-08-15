function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Y6PCzPFIzj":
        Script1();
        break;
      case "6Zp8F90bNCF":
        Script2();
        break;
      case "6GVwgR04Xwt":
        Script3();
        break;
      case "5qHs1aYMDaN":
        Script4();
        break;
      case "5b18nP9mlNz":
        Script5();
        break;
      case "6PO2L1543W1":
        Script6();
        break;
      case "6N1Ef7Q2ILT":
        Script7();
        break;
      case "67VSwoNWJ1X":
        Script8();
        break;
      case "6qoDF5m8hb6":
        Script9();
        break;
      case "6iAj7pS5qKg":
        Script10();
        break;
      case "5zrbrsOL8Rc":
        Script11();
        break;
      case "5rFRkSr1cl1":
        Script12();
        break;
      case "6fSHrNZUAM5":
        Script13();
        break;
      case "5tA62Gf1ZqY":
        Script14();
        break;
      case "6dxNYYwHfTc":
        Script15();
        break;
      case "5unfmNoFdhw":
        Script16();
        break;
      case "6Ac0frmpsRH":
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
const target = object('67M7TyIsU9m');
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
const target = object('6C9X6JuoAO3');
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
const target = object('5WUPg3EnTTX');
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
const target = object('5WDldYQqgvI');
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
