import axios from 'axios'
import { map, sum } from 'lodash'
import { getPolicyCosts } from './costs'

export const getCompanyCost = async (_, res) => {
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

    res.status(200).json({ data: { companyCost: results } })
  } catch (err) {
    res.status(500).json(err)
  }
}
