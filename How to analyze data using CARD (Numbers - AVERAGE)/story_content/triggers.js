function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zr7WxV5THD":
        Script1();
        break;
      case "6mMd9M2iiTN":
        Script2();
        break;
      case "5aK3sYDJ2rv":
        Script3();
        break;
      case "6l7dea2p8J1":
        Script4();
        break;
      case "6W3Jizu4ywZ":
        Script5();
        break;
      case "68RLMSTGz9T":
        Script6();
        break;
      case "62FY4CaRUIb":
        Script7();
        break;
      case "5qtDLsPg7Jh":
        Script8();
        break;
      case "6fXd21QjoIi":
        Script9();
        break;
      case "61LYqbJ0Ljq":
        Script10();
        break;
      case "60gnV65uxZT":
        Script11();
        break;
      case "6DF86jadhhg":
        Script12();
        break;
      case "6AIrmnG4dY4":
        Script13();
        break;
      case "5kZ6zRYJvJQ":
        Script14();
        break;
      case "6rQEtXDcJUi":
        Script15();
        break;
      case "5qrz8fAuIwi":
        Script16();
        break;
      case "6MMm4uefBQk":
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
