module.exports = {
    convertGitVersionNumber: convertGitVersionNumber
};

/**
 * Converts a "git describe --long --tags --always" version number
 * into an offical application version number
 * Throws an error on invalid version string.
 *
 * @param {String} version i.e. "v0.9-217-g17ca8ba"
 * @return {String} normalized version i.e. "v.0.9.217"
 * @public
 */
function convertGitVersionNumber(version) {

    if (!version) {
        version = '';
    }

    var v = version.trim();

    // normalize the version into the format v0.0.0.0
    var indexOfDash = v.lastIndexOf('-');

    if (indexOfDash < 0) {
        throw new Error('this does not look like a git version. no dash');
    }

    return v.substring(0, indexOfDash).replace('-', '.');
}
