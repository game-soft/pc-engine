(function() {
    'use strict';
    var pcEngineSoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return pcEngineSoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = pcEngineSoftList;
    } else {
        window.gameSoft = {
            pcEngine: pcEngineSoftList
        };
    }
})();