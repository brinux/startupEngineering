var fs = require('fs');
var outfile = "output.txt";

var out = "";
var primes = [];

for (var i = 2; primes.length < 100; i++) {
	var hasDivider = false;

	console.log("Checking number " + i);

	for (var div = 2; div < i; div++) {
		if (i % div == 0) {
			hasDivider = true;

			console.log("Divider found: not prime");

			break;
		}
	}

	if (!hasDivider) {
		console.log("No divider found: adding to primes");

		primes.push(i);
	}
}

console.log("Writing primes list");

var first = true;
for (var i in primes) {
	if (first) {
		first = false;
	} else {
		out += ",";
	}

	out += primes[i] + "";
}
out += "\n";

fs.writeFileSync(outfile, out);

console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
