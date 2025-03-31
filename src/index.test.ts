import SQLTransformer from './services/transformer.service';

describe('SQLTransformer', () => {
    let transformer: SQLTransformer;

    beforeEach(() => {
        transformer = new SQLTransformer();
    });

    describe('transform', () => {
        it('should transform IS_NULL correctly', () => {
            const transformations = [
                {
                    column: 'test_column',
                    alias: 'is_null_result',
                    transformation: 'is_null',
                },
            ];

            const result = transformer.transform(transformations);
            expect(result).toEqual(['is_null_result = IS_NULL(test_column)']);
        });

        it('should transform AND correctly', () => {
            const transformations = [
                {
                    alias: 'and_result',
                    transformation: 'and',
                    transformationArgs: {
                        left_param: 'condition1',
                        right_param: 'condition2',
                    },
                },
            ];

            const result = transformer.transform(transformations);
            expect(result).toEqual([
                'and_result = AND(condition1, condition2)',
            ]);
        });

        it('should transform BITWISE_OR correctly', () => {
            const transformations = [
                {
                    alias: 'bitwise_result',
                    transformation: 'bitwise_or',
                    transformationArgs: {
                        column: 'col1',
                        additional_input_column: 'col2',
                    },
                },
            ];

            const result = transformer.transform(transformations);
            expect(result).toEqual(['bitwise_result = BITWISE_OR(col1, col2)']);
        });

        it('should transform NULL_IF correctly', () => {
            const transformations = [
                {
                    alias: 'null_if_result',
                    transformation: 'null_if',
                    transformationArgs: {
                        condition: 'some_condition',
                        valueColumnName: 'value_col',
                    },
                },
            ];

            const result = transformer.transform(transformations);
            expect(result).toEqual([
                'null_if_result = NULL_IF(some_condition, value_col)',
            ]);
        });

        it('should throw error for unsupported transformation', () => {
            const transformations = [
                {
                    alias: 'invalid',
                    transformation: 'invalid_transform',
                },
            ];

            expect(() => transformer.transform(transformations)).toThrow(
                'Unsupported transformation: invalid_transform'
            );
        });

        it('should throw error when required args are missing', () => {
            const transformations = [
                {
                    alias: 'missing_args',
                    transformation: 'and',
                },
            ];

            expect(() => transformer.transform(transformations)).toThrow(
                'Both left_param and right_param are required for AND'
            );
        });
    });
});
