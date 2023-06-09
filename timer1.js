const timer = function(argv) {
  if (argv.length <= 2) {
    return;
  }
  for (let i = 2; i < argv.length; i++) {
    const value = argv[i];
    if (isNaN(value) || value < 0) {
      continue;
    }
    let time = value * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  }
};

timer(process.argv);