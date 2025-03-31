import { FULL_TRANSFORMATIONS_MOCK } from "./mocks/full-transformations";
import TransformationTree from "./services/transformation-tree";

function parseTransformations(jsonData: any[]): TransformationTree {
    const tree = new TransformationTree();

    jsonData.forEach((transformation) => {
        tree.addTransformation(transformation);
    });

    return tree;
}

const tree = parseTransformations(FULL_TRANSFORMATIONS_MOCK);
console.log(tree.print());
