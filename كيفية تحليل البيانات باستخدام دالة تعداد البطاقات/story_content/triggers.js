function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ls2WytDSpW":
        Script1();
        break;
      case "6X5dDOAjfjn":
        Script2();
        break;
      case "6keyuylmhNu":
        Script3();
        break;
      case "6KKrhwPkuNk":
        Script4();
        break;
      case "6RCZJwUEPuV":
        Script5();
        break;
      case "6kAKtB0viAY":
        Script6();
        break;
      case "5dAMfKwPPLb":
        Script7();
        break;
      case "5hHEHQh9VbD":
        Script8();
        break;
      case "6HwOjRLL5hi":
        Script9();
        break;
      case "5V36G64zudU":
        Script10();
        break;
      case "61vWBfTEIM2":
        Script11();
        break;
      case "5WWNluNcE17":
        Script12();
        break;
      case "6dS6D3BvuO8":
        Script13();
        break;
      case "6NeXG2qubXE":
        Script14();
        break;
      case "6CaNt4KTxHz":
        Script15();
        break;
      case "6RbhjZG67zN":
        Script16();
        break;
      case "6gCX3ML5ImU":
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
