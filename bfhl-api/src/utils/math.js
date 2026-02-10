const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const hcfArray = (arr) => arr.reduce((a, b) => gcd(a, b));

const lcm = (a, b) => (a * b) / gcd(a, b);

const lcmArray = (arr) => arr.reduce((a, b) => lcm(a, b));

const fibonacci = (n) => {
  if (n < 0) return [];
  const res = [0];
  if (n === 0) return res;
  res.push(1);
  for (let i = 2; i <= n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res;
};

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

module.exports = {
  hcfArray,
  lcmArray,
  fibonacci,
  isPrime
};
