// @flow
import chalk from 'chalk';
import commander from 'commander';
import decompose from './decompose';
import { loadHistory, saveHistory } from './history';
import { version } from '../package.json';

async function decomposeAndOutput(words) {
  const string = words.join('');
  const results = await decompose(string);
  words.forEach(word => {
    const output = results[word]
      .map(result => {
        const key = chalk.dim(`(${result.key})`);
        return `${result.code} ${key}`;
      })
      .join('\n    ');
    console.log(`${word}: ${output}`);
  });
}

async function main() {
  const program = commander
    .version(version)
    .arguments('<words>')
    .option('-H, --history', 'Show history')
    .parse(process.argv);

  if (program.history) {
    const history = await loadHistory();
    if (history.length === 0) {
      console.log('No history.');
      return;
    }
    decomposeAndOutput(history);
  } else if (program.args.length === 0) {
    program.help();
  }
  await decomposeAndOutput(program.args.join('').split(''));
  await saveHistory(program.args.join(''));
}

main().catch(console.error);
