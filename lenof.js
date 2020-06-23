const trainingSet = require("./data/rasa_dataset_training");
const testingSet = require("./data/rasa_dataset_testing");

console.log({
  trainingSet: {
    len: trainingSet.rasa_nlu_data.common_examples.length,
  },
  testingSet: {
    len: testingSet.rasa_nlu_data.common_examples.length,
  },
});
