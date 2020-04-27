'use strict';
const methods = require('./methods')

class Cost {
  getPolicyCosts () {
    return methods.getPolicyCosts()
  }
}

module.exports = new Cost()
