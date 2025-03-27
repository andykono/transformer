# TypeScript Project

A basic TypeScript project setup with modern configuration and testing capabilities.

## Features

- TypeScript configuration with strict mode
- Jest for testing
- Source maps for debugging
- Modern ES2020 target
- Git configuration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Run the project:
   ```bash
   npm start
   ```

4. Run tests:
   ```bash
   npm test
   ```

5. Development mode (watch mode):
   ```bash
   npm run dev
   ```

## Project Structure

- `src/` - Source files
- `dist/` - Compiled JavaScript files
- `src/*.test.ts` - Test files

## Scripts

- `npm start` - Run the compiled project
- `npm run build` - Build the project
- `npm run dev` - Run in development mode with watch
- `npm test` - Run tests 

## Transformation service

This TypeScript implementation provides a flexible solution for transforming JSON-based transformations into SQL-like representations. Let me break down the key features:

1. Flexible Transformation Mapping:

Uses a transformationMap to define how different transformations are converted
Supports extensibility by easily adding new transformation types
Provides type-safe argument checking


2. Error Handling:

Throws descriptive errors if transformation arguments are missing
Ensures each transformation has the required parameters


3. Transformation Types Supported:

is_null: Checks if a column is null
and: Combines two boolean conditions
bitwise_or: Performs bitwise OR operation
null_if: Conditionally returns null


4. Usage Example:

The code includes the exact JSON transformation you provided
Demonstrates how to create a transformer and apply transformations



When you run this code, it will output the SQL-like transformations:
```
is_null_162 = IS_NULL(usersPlumbusJson.stid)
is_null_163 = IS_NULL(rawEventRequestLevelCommon.udbFlags)
and_result_164 = AND(is_null_162, is_null_163)
bitwise_or_op_166 = BITWISE_OR(aura_store_flag_default_0, stid_default_0)
device_eligible_stores_flags = NULL_IF(and_result_164, bitwise_or_op_166)
```
