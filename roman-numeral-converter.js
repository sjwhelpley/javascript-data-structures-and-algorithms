const conversion = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
];

function convertToRoman(num) {
 const numeral = []
 let remainder = num;

 for (let item of conversion) {
   while(remainder >= item[1] && remainder > 0) {
     numeral.push(item[0])

     remainder -= item[1]
   }
 }
 
 return numeral.join("")
}
