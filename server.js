// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: express-example-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var app = require('./')();
var port = 'PORT' in process.env ? process.env.PORT : 3000;

console.log('Listening on port:', port);

app.listen(port);
