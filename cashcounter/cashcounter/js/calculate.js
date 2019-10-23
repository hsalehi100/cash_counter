sumar = () => {
    const five_cent = document.getElementById("five_cent").value * 0.05;
    const ten_cent = document.getElementById("ten_cent").value * 0.10;
    const twentyfive_cent = document.getElementById("twentyfive_cent").value * 0.25;
    const loonnie = document.getElementById("loonie").value * 1;
    const toonie = document.getElementById("toonie").value * 2;
    const five = document.getElementById("five").value * 5;
    const ten = document.getElementById("ten").value * 10;
    const twenty = document.getElementById("twenty").value * 20;
    const fifty = document.getElementById("fifty").value * 50;
    const hundred = document.getElementById("hundred").value * 100;
    const five_roll = document.getElementById("five_roll").value * 2;
    const ten_roll = document.getElementById("ten_roll").value * 5;
    const twentyfive_roll = document.getElementById("twentyfive_roll").value * 10;
    const loonie_roll = document.getElementById("loonie_roll").value * 25;
    const toonie_roll = document.getElementById("toonie_roll").value * 50;

    const coins = five_cent + ten_cent + twentyfive_cent + loonie + toonie;
    const bills = five + ten + twenty + fifty + hundred;
    const rolls = five_roll + ten_roll + twentyfive_roll + loonie_roll + toonie_roll;

    const total = coins + bills + rolls;
    document.getElementById("total").innerHTML = "TOTAL: $" + total.toString();
}

tills = () => {
  const till1 = parseFloat(document.getElementById("till1").value);
  const till2 = parseFloat(document.getElementById("till2").value);
  const till3 = parseFloat(document.getElementById("till3").value);

  const tot = (till1 + till2 + till3).toFixed(2);
  const deposit = (tot - 500).toFixed(2);


  document.getElementById("tilltotal").innerHTML = "TOTAL: $" + tot.toString();
  document.getElementById("deposit").innerHTML = "DEPOSIT: $" + deposit.toString();
}

reset_tills = () => {
  document.getElementById("till1").value = 0
  document.getElementById("till2").value = 0
  document.getElementById("till3").value = 0
  document.getElementById("tilltotal").innerHTML = "TOTAL: $0"
  document.getElementById("deposit").innerHTML = "DEPOSIT: $0"
}


reset = () => {
    document.getElementById("to500").value = 0
    document.getElementById("to200").value = 0
    document.getElementById("to100").value = 0
    document.getElementById("to50").value = 0
    document.getElementById("to20").value = 0
    document.getElementById("total").innerHTML = "0";
}
