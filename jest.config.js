/*
	eslint-disable
	unicorn/prefer-module,
	@typescript-eslint/naming-convention
*/
const config = {
	transform: {
		'^.+\\.tsx?$': ['ts-jest', {
			tsconfig: '<rootDir>/tsconfig.jest.json',
		}],
	},
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@app(.*)$': '<rootDir>/src/app/$1',
	},
	modulePathIgnorePatterns: [
		'<rootDir>/.next/',
	],
	setupFilesAfterEnv: [
		'<rootDir>/jest-setup.ts',
	],
};

module.exports = config;
