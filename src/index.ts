import { TRANSFORMATIONS_MOCK } from "./mocks/transformations.mock";
import SQLTransformer from "./services/transformer.service";

console.log('Start \n'); 

// Create transformer and transform the JSON
const transformer = new SQLTransformer();
const sqlTransformations = transformer.transform(TRANSFORMATIONS_MOCK);

// Print results
sqlTransformations.forEach(t => console.log(t));