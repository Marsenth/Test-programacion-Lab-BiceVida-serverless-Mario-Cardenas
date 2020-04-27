import * as methods from './methods'

class Policy {
  async getCompanyCost () { return methods.getCompanyCost() }
}

export default new Policy()
