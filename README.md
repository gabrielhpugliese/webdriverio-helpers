# webdriverio-helpers
Helpers and commands for Webdriverio

# Usage

On your test, just require it. It will return an object with helpers and custom commands will be created to browser var:

```
var helpers = require('webdriverio-helpers');

helpers.assertAny(...);

browser.waitForVisibleAndClick('.my-selector');
```
