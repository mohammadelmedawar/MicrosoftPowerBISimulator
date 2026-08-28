function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CGTXaeO1kt":
        Script1();
        break;
      case "6kJDOwye28v":
        Script2();
        break;
      case "5xob5xzFfPe":
        Script3();
        break;
      case "6e5KrEP0659":
        Script4();
        break;
      case "6Me1s6GEufY":
        Script5();
        break;
      case "6fWTHHCF36N":
        Script6();
        break;
      case "5up8MvbIJ7E":
        Script7();
        break;
      case "6ItpGCoeRv9":
        Script8();
        break;
      case "61AwkVV6aHi":
        Script9();
        break;
      case "6gB5LsiCyje":
        Script10();
        break;
      case "6JvLq4Kam8Z":
        Script11();
        break;
      case "69YzGLART41":
        Script12();
        break;
      case "6YhB5LwxafR":
        Script13();
        break;
      case "6ENkmBUVr7f":
        Script14();
        break;
      case "5g0RTlicbEu":
        Script15();
        break;
      case "654NRaCyqrR":
        Script16();
        break;
      case "6O9ONIlkCDJ":
        Script17();
        break;
      case "5xqcrNiaIWp":
        Script18();
        break;
      case "68YsTzYeh5X":
        Script19();
        break;
      case "6EoPEMJ2brq":
        Script20();
        break;
      case "6euHIcIzSTp":
        Script21();
        break;
      case "65w82192pjD":
        Script22();
        break;
      case "5h8OfUPo7xh":
        Script23();
        break;
      case "5bTDYMsVMPO":
        Script24();
        break;
      case "5fopIK2buMp":
        Script25();
        break;
      case "6hGHuEoEESK":
        Script26();
        break;
      case "5YBVPXZjaTT":
        Script27();
        break;
      case "6LRj0wUGTBk":
        Script28();
        break;
      case "6kFC3uV2Lzj":
        Script29();
        break;
      case "61jyxVZ5F6H":
        Script30();
        break;
      case "6Kf0BhZyM4W":
        Script31();
        break;
      case "5mP0sLiAHIb":
        Script32();
        break;
      case "6hfkbHFWK43":
        Script33();
        break;
      case "6iveWZgPBWf":
        Script34();
        break;
      case "6noXCDqPQiN":
        Script35();
        break;
      case "6nZ9atQT1oU":
        Script36();
        break;
      case "5qXIaZ5oi1I":
        Script37();
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

window.Script2 = function()
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
