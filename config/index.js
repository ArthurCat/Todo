var configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd
            + '@ds123698.mlab.com:23698/nodetodoarthur';
    }
}