interface TransformationArgs {
  [key: string]: string | number | boolean;
}

interface Transformation {
  column?: string;
  alias: string;
  transformation: string;
  transformationArgs?: TransformationArgs;
}
