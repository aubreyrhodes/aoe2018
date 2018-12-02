class Day01 {
  static run(string) {
    let freq = 0;
    const steps = string.split(', ');
    steps.forEach((step) => {
      if (step[0] === '+') {
        freq += parseInt(step.slice(1, step.length), 10);
      } else if (step[0] === '-') {
        freq -= parseInt(step.slice(1, step.length), 10);
      }
    });
    return freq;
  }

  static run2(string) {
    let freq = 0;
    const reachedFreqs = [0];
    let foundFreq;
    const steps = string.split(', ');
    if (steps[steps.length - 1] === '') {
      steps.pop();
    }
    let currentStep = 0;
    while (foundFreq === undefined) {
      const step = steps[currentStep % steps.length];
      if (step[0] === '+') {
        freq += parseInt(step.slice(1, step.length), 10);
      } else if (step[0] === '-') {
        freq -= parseInt(step.slice(1, step.length), 10);
      }

      if (reachedFreqs.includes(freq)) {
        foundFreq = freq;
      }

      reachedFreqs.push(freq);
      currentStep += 1;
    }

    return foundFreq;
  }
}

export default Day01;
