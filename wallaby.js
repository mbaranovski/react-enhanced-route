module.exports = function (wallaby) {

    return {
        files: [
            {pattern: 'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)', load: false},
            {pattern: '!src/**/*.test.js?(x)', load: false},
        ],

        tests: [
            {pattern: 'src/**/*.test.js?(x)', load: true}
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },

        env: {
            type: 'node',
            runner: 'node'
        },

        testFramework: 'jest',

    };
};