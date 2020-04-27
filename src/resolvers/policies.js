import Policy from '../models/policy'

export const getCompanyCost = async (_, res) => {
  const { data, error } = await Policy.getCompanyCost()

  if (error) {
    res.status(500).json(error)
  } else {
    res.status(200).json(data)
  }
}
