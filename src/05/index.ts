import { readFileSeparated, toNumber } from "../helpers";
import { Solution } from "..";
import { IntCodeMachine } from "../int-code-machine";

const getInput = readFileSeparated(",", "05", "input").then(r =>
  r.map(toNumber)
);

const solution: Solution = async () => {
  const input = await getInput;

  const machine = new IntCodeMachine(input, [1], { silent: true });
  const result = await machine.run();

  return result[0] || NaN;
};

const test = async (
  program: string,
  mockInputs: number[],
  expectedResult: number
) => {
  const input = program.split(",").map(toNumber);

  console.log("");
  console.log(`Testing, expected result: ${expectedResult}`);
  const machine = new IntCodeMachine(input, mockInputs, {
    silent: true
  });
  const result = await machine.run();

  if (result[0] !== expectedResult) {
    throw Error(
      `Test failed: program "${program}" returned ${result}, expected ${expectedResult}`
    );
  } else {
    console.log("Test passed");
  }
};

solution.partTwo = async () => {
  const input = await getInput;

  // await test("3,9,8,9,10,9,4,9,99,-1,8", [8], 1);
  // await test("3,9,7,9,10,9,4,9,99,-1,8", [7], 1);
  // await test("3,9,7,9,10,9,4,9,99,-1,8", [9], 0);
  // await test("3,3,1108,-1,8,3,4,3,99", [8], 1);
  // await test("3,3,1107,-1,8,3,4,3,99", [7], 1);
  // await test("3,3,1107,-1,8,3,4,3,99", [9], 0);

  const machine = new IntCodeMachine(input, [5], {
    silent: true
  });
  const result = await machine.run();

  return result[0] || NaN;
};

export default solution;
