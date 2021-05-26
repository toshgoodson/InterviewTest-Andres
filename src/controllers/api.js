const _ = require('lodash')
const PlanSource = require('../models/PlanSource')
planSource = new PlanSource()

module.exports = (app) => {
	// Add routes here
	app.get('/api/test', (req, res) => { res.send('Hello World') })

	app.get('/api/quote', (req, res) => {
		let {filter, sort} = req.query
		filter = filter || {}

		planSource.getPlans().then((plans) => {
			let filteredPlans = plans.filter((p) => {
				if (filter.deductible != null) {
					if (p.deductible != filter.deductible) { return false }
				}
				if (filter.carrierIds != null && filter.carrierIds instanceof Array) {
					if (!filter.carrierIds.includes(p.carrierId)) { return false }
				}

				return true
			})

			if (sort === 'premium') {
				filteredPlans = _.sortBy(filteredPlans, 'premium')
			} else if (sort === 'deductible') {
				filteredPlans = _.sortBy(filteredPlans, 'deductible')
			}


			res.json({
				unfilteredCount: plans.length,
				plans: filteredPlans,
				filters: {
					deductible: _.sortBy(_.uniq(_.map(plans, 'deductible'))),
					carrierId:  _.sortBy(_.uniq(_.map(plans, 'carrierId'))),
				}
			})
		}) 
	})
}