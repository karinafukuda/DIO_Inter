let lines = gets().split('\n');
let line = lines.shift().split(' ');

let N = parseInt(line[0]);
let L = parseInt(line[1]);

const P = (N, L) => {
  return N * L;
};

console.log(P(N, L));
