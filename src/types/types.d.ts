// interface TransformationArgs {
//   [key: string]: string | number | boolean;
// }

interface Transformation {
    column?: string;
    alias?: string;
    transformation: string;
    transformationArgs?: Record<string, any> /*TransformationArgs*/;
}

interface TreeNode {
    name: string;
    transformations: TransformationNode[];
    children: Map<string, TreeNode>;
}

interface TransformationNode {
    type: string;
    alias: string;
    args?: Record<string, any>;
}
