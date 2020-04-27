'use strict';
const axios = require('axios')
const { map, sum } =  require('lodash')
const { getPolicyCosts } =  require('../../cost/methods')

module.exports = {
  getCompanyCost: async () => {
    try {
      const {
        data: {
          policy: {
            workers,
            has_dental_care,
            company_percentage,
          },
        },
      } = await axios.get('https://dn8mlk7hdujby.cloudfront.net/interview/insurance/policy')

      const settings = { has_dental_care, company_percentage }
      const results = sum(map(workers, (worker) => {
        const cost = getPolicyCosts(worker, settings)
        return cost
      }))

      return { data: { companyCost: results } }
    } catch (error) {
      return { error }
    }
  }
}