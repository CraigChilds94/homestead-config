// Handle the reading of a homestead configuration file
module.exports = (function() {

    // Grab dependencies
    var fs   = require('fs'),
        path = require('path'),
        yaml = require('js-yaml');

    /**
     * Read a file
     *
     * @param String path
     * @param String parse
     */
    function readFile(path, parse)
    {
        var doc = false;
        parse = parse || false;

        try {
            doc = fs.readFileSync(path, 'utf8');

            if(parse) {
                doc = yaml.safeLoad(doc);
            }
        } catch (e) {
            console.log(e);
        }

        return doc;
    }

    // Give access to public functions
    return {
        read: readFile
    };

})();
