'use strict';
const Policy = require('../models/policy')

module.exports.getCompanyCost = async () => {
  const { data, error } = await Policy.getCompanyCost()

  if (error) {
    throw new Error(error)
  } else {
    return data
  }
}
