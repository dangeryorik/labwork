const ipToInt = (ip = '127.0.0.1') =>
  ip.split('.').reduce((acc, part) => (acc << 8) + parseInt(part), 0);

console.log(ipToInt('127.0.0.1')); 
console.log(ipToInt('10.0.0.1')); 
console.log(ipToInt('192.168.1.10')); 
console.log(ipToInt()); 