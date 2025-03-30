let petrol = document.getElementById("input1");
let litre = document.getElementById("input2");
let result = document.getElementById("total");

function calculate() {
  let petrolValue = petrol.value;
  let litreValue = litre.value;
  let total = petrolValue * litreValue;
  result.innerHTML = total;
}
