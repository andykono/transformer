export const TRANSFORMATIONS_MOCK: Transformation[] = [
    {
        column: 'usersPlumbusJson.stid',
        alias: 'is_null_162',
        transformation: 'is_null',
    },
    {
        column: 'rawEventRequestLevelCommon.udbFlags',
        alias: 'is_null_163',
        transformation: 'is_null',
    },
    {
        alias: 'and_result_164',
        transformation: 'and',
        transformationArgs: {
            left_param: 'is_null_162',
            right_param: 'is_null_163',
        },
    },
    {
        column: 'aura_store_flag_default_0',
        alias: 'bitwise_or_op_166',
        transformation: 'bitwise_or',
        transformationArgs: {
            column: 'aura_store_flag_default_0',
            additional_input_column: 'stid_default_0',
        },
    },
    {
        alias: 'device_eligible_stores_flags',
        transformation: 'null_if',
        transformationArgs: {
            condition: 'and_result_164',
            valueColumnName: 'bitwise_or_op_166',
        },
    },
];
