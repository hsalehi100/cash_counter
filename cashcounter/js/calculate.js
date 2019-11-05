function calculate() {
  //coins
  let fcent = document.getElementsByName("fcent")[0].value * 0.05;
  let fctotal = Number(fcent).toFixed(2);
  document.getElementById("fcout").innerHTML = "$" + fctotal;

  let tcent = document.getElementsByName("tcent")[0].value * 0.10;
  let tctotal = Number(tcent).toFixed(2);
  document.getElementById("tcout").innerHTML = "$" + tctotal;

  let tfcent = document.getElementsByName("tfcent")[0].value * 0.25;
  let tftotal = Number(tfcent).toFixed(2);
  document.getElementById("tfcout").innerHTML = "$" + tftotal;

  let loonie = document.getElementsByName("loonie")[0].value * 1;
  let ltotal = Number(loonie).toFixed(2);
  document.getElementById("lcout").innerHTML = "$" + ltotal;

  let toonie = document.getElementsByName("toonie")[0].value * 2;
  let toototal = Number(toonie).toFixed(2);
  document.getElementById("toocout").innerHTML = "$" + toototal;

  //bills
  let five = document.getElementsByName("five")[0].value * 5;
  let fivetotal = Number(five).toFixed(2);
  document.getElementById("fivecout").innerHTML = "$" + fivetotal;

  let ten = document.getElementsByName("ten")[0].value * 10;
  let tentotal = Number(ten).toFixed(2);
  document.getElementById("tencout").innerHTML = "$" + tentotal;

  let twenty = document.getElementsByName("twenty")[0].value * 20;
  let twtotal = Number(twenty).toFixed(2);
  document.getElementById("twcout").innerHTML = "$" + twtotal;

  let fifty = document.getElementsByName("fifty")[0].value * 50;
  let fiftotal = Number(fifty).toFixed(2);
  document.getElementById("fifcout").innerHTML = "$" + fiftotal;

  let hundred = document.getElementsByName("hundred")[0].value * 100;
  let huntotal = Number(hundred).toFixed(2);
  document.getElementById("huncout").innerHTML = "$" + huntotal;

  //coins rolls
  let froll = document.getElementsByName("froll")[0].value * 2;
  let frtotal = Number(froll).toFixed(2);
  document.getElementById("frcout").innerHTML = "$" + frtotal;

  let troll = document.getElementsByName("troll")[0].value * 5;
  let trtotal = Number(troll).toFixed(2);
  document.getElementById("trcout").innerHTML = "$" + trtotal;

  let tfroll = document.getElementsByName("tfroll")[0].value * 10;
  let tfrtotal = Number(tfroll).toFixed(2);
  document.getElementById("tfrcout").innerHTML = "$" + tfrtotal;

  let lroll = document.getElementsByName("lroll")[0].value * 25;
  let lrtotal = Number(lroll).toFixed(2);
  document.getElementById("lrcout").innerHTML = "$" + lrtotal;

  let tooroll = document.getElementsByName("tooroll")[0].value * 50;
  let toortotal = Number(tooroll).toFixed(2);
  document.getElementById("toorcout").innerHTML = "$" + toortotal;

  let totalCoins = Number(fcent) + Number(tcent) + Number(tfcent) + Number(loonie) + Number(toonie);
  let totalBills = Number(five) + Number(ten) + Number(twenty) + Number(fifty) + Number(hundred);
  let totalRolls = Number(froll) + Number(troll) + Number(tfroll) + Number(lroll) + Number(tooroll);

  let total = (totalCoins + totalBills + totalRolls).toFixed(2);
  document.getElementsByName("total")[0].value = total;
}


function tills() {
  let till1 = document.getElementsByName("till1")[0].value;
  let till2 = document.getElementsByName("till2")[0].value;
  let till3 = document.getElementsByName("till3")[0].value;

  let total = Number(till1) + Number(till2) + Number(till3);
  let float = document.getElementsByName("float")[0].value;
  let deposit = (total - Number(float)).toFixed(2);


  document.getElementsByName("tot")[0].value = total;
  document.getElementsByName("deposit")[0].value = deposit;
}

function reset_tills() {
  document.getElementsByName("till1")[0].value = 0;
  document.getElementsByName("till2")[0].value = 0;
  document.getElementsByName("till3")[0].value = 0;

  document.getElementsByName("tot")[0].value = 0;
  document.getElementsByName("float")[0].value = 500;
  document.getElementsByName("deposit")[0].value = 0;
}


reset = () => {
  document.getElementsByName("fcent")[0].value = 0;
  document.getElementsByName("tcent")[0].value = 0;
  document.getElementsByName("tfcent")[0].value = 0;
  document.getElementsByName("loonie")[0].value = 0;
  document.getElementsByName("toonie")[0].value = 0;

  //bills
  document.getElementsByName("five")[0].value = 0;
  document.getElementsByName("ten")[0].value = 0;
  document.getElementsByName("twenty")[0].value = 0;
  document.getElementsByName("fifty")[0].value = 0;
  document.getElementsByName("hundred")[0].value = 0;

  //coins rolls
  document.getElementsByName("froll")[0].value = 0;
  document.getElementsByName("troll")[0].value = 0;
  document.getElementsByName("tfroll")[0].value = 0;
  document.getElementsByName("lroll")[0].value = 0;
  document.getElementsByName("tooroll")[0].value = 0;

  //displays
  document.getElementById("fcout").innerHTML = "$0.00";
  document.getElementById("tcout").innerHTML = "$0.00";
  document.getElementById("tfcout").innerHTML = "$0.00";
  document.getElementById("lcout").innerHTML = "$0.00";
  document.getElementById("toocout").innerHTML = "$0.00";
  document.getElementById("fivecout").innerHTML = "$0.00";
  document.getElementById("tencout").innerHTML = "$0.00";
  document.getElementById("twcout").innerHTML = "$0.00";
  document.getElementById("fifcout").innerHTML = "$0.00";
  document.getElementById("huncout").innerHTML = "$0.00";
  document.getElementById("frcout").innerHTML = "$0.00";
  document.getElementById("trcout").innerHTML = "$0.00";
  document.getElementById("tfrcout").innerHTML = "$0.00";
  document.getElementById("lrcout").innerHTML = "$0.00";
  document.getElementById("toorcout").innerHTML = "$0.00";

  document.getElementsByName("total")[0].value = 0;
}
