import axios from 'axios'
import { map, sum } from 'lodash'
import { getPolicyCosts } from '../../cost/methods'

export const getCompanyCost = async () => {
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
