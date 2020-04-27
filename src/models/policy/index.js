'use strcit';
const methods = require('./methods')

class Policy {
  async getCompanyCost () { return methods.getCompanyCost() }
}

module.exports = new Policy()
