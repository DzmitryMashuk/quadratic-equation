module.exports = function solveEquation(equation) {
  let a = equation.match("[-]?\\d+ \\* x\\^2")[0];
  let b = equation.match("[+-] \\d+ \\* x")[0];
  let c = equation.match("[+-] \\d+$")[0];

  a = a.split(' ').join('').match("[-]?\\d+");
  b = b.split(' ').join('').match("[+-]\\d+");
  c = c.split(' ').join('').match("[+-]\\d+");

  let d  = Math.pow(b, 2) - 4 * a * c;
  let x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  let x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));

  return [x1, x2].sort(function(a, b) {
  	return a - b;
  });
}