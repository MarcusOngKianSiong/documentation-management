
// external modules
global.parser = require('@babel/parser');
global.traverse = require('@babel/traverse').default;
global.Table = require('cli-table')
global.fs = require('fs').promises

// Components
require('./documentation_operation/operations.js')
require('./command_line/operations.js')


