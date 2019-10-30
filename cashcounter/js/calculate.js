function calculate() {
  //coins
  let fcent = document.getElementsByName("fcent")[0].value * 0.05;
  let tcent = document.getElementsByName("tcent")[0].value * 0.10;
  let tfcent = document.getElementsByName("tfcent")[0].value * 0.25;
  let loonie = document.getElementsByName("loonie")[0].value * 1;
  let toonie = document.getElementsByName("toonie")[0].value * 2;

  //bills
  let five = document.getElementsByName("five")[0].value * 5;
  let ten = document.getElementsByName("ten")[0].value * 10;
  let twenty = document.getElementsByName("twenty")[0].value * 20;
  let fifty = document.getElementsByName("fifty")[0].value * 50;
  let hundred = document.getElementsByName("hundred")[0].value * 100;

  //coins rolls
  let froll = document.getElementsByName("froll")[0].value * 2;
  let troll = document.getElementsByName("troll")[0].value * 5;
  let tfroll = document.getElementsByName("tfroll")[0].value * 10;
  let lroll = document.getElementsByName("lroll")[0].value * 25;
  let tooroll = document.getElementsByName("tooroll")[0].value * 50;

  let totalCoins = Number(fcent) + Number(tcent) + Number(tfcent) + Number(loonie) + Number(toonie);
  let totalBills = Number(five) + Number(ten) + Number(twenty) + Number(fifty) + Number(hundred);
  let totalRolls = Number(froll) + Number(troll) + Number(tfroll) + Number(lroll) + Number(tooroll);

  let total = totalCoins + totalBills + totalRolls;
  document.getElementsByName("total")[0].value = total;
}

function tills() {
  let till1 = document.getElementsByName("till1")[0].value;
  let till2 = document.getElementsByName("till2")[0].value;
  let till3 = document.getElementsByName("till3")[0].value;

  let total = Number(till1) + Number(till2) + Number(till3);
  let deposit = (total - 500).toFixed(2);


  document.getElementsByName("tot")[0].value = total;
  document.getElementsByName("deposit")[0].value = deposit;
}

function reset_tills() {
  document.getElementsByName("till1")[0].value = 0;
  document.getElementsByName("till2")[0].value = 0;
  document.getElementsByName("till3")[0].value = 0;

  document.getElementsByName("tot")[0].value = 0;
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

  document.getElementsByName("total")[0].value = 0;
}
