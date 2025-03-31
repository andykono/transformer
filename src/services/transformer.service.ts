export default class SQLTransformer {
  // Mapping of transformations to SQL-like representations
  private transformationMap: {
    [key: string]: (args?: TransformationArgs) => string;
  } = {
    is_null: (args) => {
      if (!args || !args.column)
        throw new Error('Column is required for IS_NULL');
      return `IS_NULL(${args.column})`;
    },
    and: (args) => {
      if (!args || !args.left_param || !args.right_param) {
        throw new Error('Both left_param and right_param are required for AND');
      }
      return `AND(${args.left_param}, ${args.right_param})`;
    },
    bitwise_or: (args) => {
      if (!args || !args.column || !args.additional_input_column) {
        throw new Error(
          'Both column and additional_input_column are required for BITWISE_OR'
        );
      }
      return `BITWISE_OR(${args.column}, ${args.additional_input_column})`;
    },
    null_if: (args) => {
      if (!args || !args.condition || !args.valueColumnName) {
        throw new Error(
          'Both condition and valueColumnName are required for NULL_IF'
        );
      }
      return `NULL_IF(${args.condition}, ${args.valueColumnName})`;
    },
  };

  // Transform a single transformation
  private transformSingle(transformation: Transformation): string {
    const transformFunc = this.transformationMap[transformation.transformation];

    if (!transformFunc) {
      throw new Error(
        `Unsupported transformation: ${transformation.transformation}`
      );
    }

    // Prepare arguments for the transformation
    const args =
      transformation.transformation === 'is_null'
        ? { column: transformation.column }
        : transformation.transformationArgs;

    const result = transformFunc(args as TransformationArgs);
    return `${transformation.alias} = ${result}`;
  }

  // Transform entire JSON array
  transform(transformations: Transformation[]): string[] {
    return transformations.map((t) => this.transformSingle(t));
  }
}
