/**
 * A very simple file transformer which returns a stub module: meant to be
 * used to render a static asset require like `require('xxx.png')` into a
 * no-op.
 */

module.exports = {
    process(src, filename, config, options) {
        return 'module.exports = "stub"';
    },
}
