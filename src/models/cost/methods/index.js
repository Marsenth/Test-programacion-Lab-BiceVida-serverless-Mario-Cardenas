const costs = {
  policyCosts: {
    lifeHealth: {
      0: 0.279,
      1: 0.4396,
      2: 0.5599,
    },
    dental: {
      0: 0.12,
      1: 0.1950,
      2: 0.2480,
    },
  },
}

export const getPolicyCosts = (worker, settings) => {
  if (worker.age > 65) return 0

  const { childs } = worker
  const { has_dental_care, company_percentage } = settings
  const { policyCosts: { lifeHealth, dental } } = costs
  const costKey = childs < 2 ? childs : 2

  // calculate company percent amount
  return (company_percentage / 100) * (
    lifeHealth[costKey] + (has_dental_care ? dental[costKey] : 0)
  )
}
