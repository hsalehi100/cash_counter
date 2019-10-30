// clears field of default value

function clear_field(field) {

		if (field.value==field.defaultValue) {

			field.value=''

		}

	}


function s(num, val) {
  amount = num * 1; // amount is the num or NaN
  sum = (!num ? 0 : num) * val;  // the sum for that bill or coin

  if (isNaN(amount)) { // if the entire is not a number

    alert(
    "' " + num + " ' is not a valid entry and that field will "
    + "not be included in the total money calculation."
    );

    return 0;
  }
  else
    return sum; // if it is OK, send sum back
  }

function money(form) {

  hun = s(document.getElementById("hundred")[0].value, 100); // Each amount is the returned value
  fif = s(document.getElementById("fifty")[0].value, 50);  // for the amount in the s() function
  twe = s(document.getElementById("twenty")[0].value, 20);
  ten = s(document.getElementById("ten")[0].value, 10);
  fiv = s(document.getElementById("five")[0].value, 5);
  two = s(document.getElementById("toonie")[0].value, 2);
  one = s(document.getElementById("loonie")[0].value, 1);
  qtr = s(document.getElementById("twentyfive_cent")[0].value, .25);
  dme = s(document.getElementById("ten_cent")[0].value, .1);
  nck = s(document.getElementById("five_cent")[0].value, .05);


  // add up all the amounts
  var ttl = (hun + fif + twe + ten + fiv
  + two + one + qtr + dme + nck);

  // add up all the bills
  //var bills = (form.hundred.value *1) + (form.fifty.value *1) + (form.twenty.value *1) + (form.ten.value *1) + (form.five.value *1);

  // add up all the coins
  //var coins =  (form.toonie.value *1) + (form.loonie.value *1) + (form.tfcent.value *1) + (form.tcent.value *1) + (form.fcent.value *1);

  // rounds total to two decimal places

  ttl = "" + ((Math.round(ttl * 100)) / 100);

  dec1 = ttl.substring(ttl.length-3, ttl.length-2);
  dec2 = ttl.substring(ttl.length-2, ttl.length-1);

  if (dec1 != '.') { // adds trailing zeroes if necessary
  if (dec2 == '.') ttl += "0";
  else ttl += ".00";
  }
  document.getElementById("total")[0].value = ttl; // display total amount
  form.bills.value = bills; // display total quantity bills
  form.coins.value = coins; // display total quantity coins
}
