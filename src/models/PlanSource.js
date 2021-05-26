
/***
 * Do not modify this file.
 */
module.exports = class PlanSource {
	async getPlans() {
		return Promise.resolve(plans)
	}
}

var plans = [
	{
		"deductible": 10000,
		"coinsurance": 0,
		"carrierId": "regionalstandard",
		"planName": "Regional Standard Enhanced PPO 10000/0/10000/1000000 Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": "$0",
		"maxDurationMonths": 12,
		"outOfPocketMax": 10000,
		"premium": 89.5
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 1 5000/20/9000/500000",
		"lifetimeMax": 500000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 9000,
		"bestSeller": true,
		"premium": 32.49
	},
	{
		"deductible": 7500,
		"coinsurance": 20,
		"carrierId": "birch",
		"planName": "Birch Plan 3 7500/20/17500/1500000 Extended",
		"lifetimeMax": 1500000,
		"coinsuranceLimit": 50000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 17500,
		"premium": 107.76
	},
	{
		"deductible": 2500,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 1 2500/20/6500/500000",
		"lifetimeMax": 500000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 6500,
		"bestSeller": true,
		"premium": 40.83
	},
	{
		"deductible": 2500,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 1 2500/20/4500/500000",
		"lifetimeMax": 500000,
		"coinsuranceLimit": 10000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 4500,
		"bestSeller": true,
		"premium": 42.18
	},
	{
		"deductible": 1000,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 1 1000/20/5000/500000",
		"lifetimeMax": 500000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 5000,
		"bestSeller": true,
		"premium": 59.98
	},
	{
		"deductible": 1000,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 1 1000/20/3000/500000",
		"lifetimeMax": 500000,
		"coinsuranceLimit": 10000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 3000,
		"bestSeller": true,
		"premium": 61.77
	},
	{
		"deductible": 10000,
		"coinsurance": 30,
		"carrierId": "slimco",
		"planName": "Basic Med Select STM Plan 2 10000/30/1M Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 16000,
		"premium": 76.77
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "slimco",
		"planName": "Basic Med Select STM Plan 3 5000/20/1M Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 10000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 7000,
		"premium": 110.89
	},
	{
		"deductible": 10000,
		"coinsurance": 20,
		"carrierId": "slimco",
		"planName": "Basic Med Select STM Plan 2 10000/20/1M Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 14000,
		"premium": 79.65
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 1 5000/20/7000/500000",
		"lifetimeMax": 500000,
		"coinsuranceLimit": 10000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 7000,
		"bestSeller": true,
		"premium": 33.63
	},
	{
		"deductible": 7500,
		"coinsurance": 30,
		"carrierId": "slimco",
		"planName": "Basic Med Select STM Plan 2 7500/30/1M Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 13500,
		"premium": 81.72
	},
	{
		"deductible": 7500,
		"coinsurance": 20,
		"carrierId": "slimco",
		"planName": "Basic Med Select STM Plan 2 7500/20/1M Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 11500,
		"premium": 84.96
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 3 5000/20/9000/1000000",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 9000,
		"premium": 87.37
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 2 5000/20/9000/1000000",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 9000,
		"premium": 91.7
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 3 5000/20/7000/1000000",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 10000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 7000,
		"premium": 92.01
	},
	{
		"deductible": 7500,
		"coinsurance": 20,
		"carrierId": "regionalstandard",
		"planName": "Regional Standard Enhanced PPO 7500/20/12500/1000000 Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 25000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 12500,
		"premium": 94.59
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 2 5000/20/7000/1000000",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 10000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 7000,
		"premium": 96.57
	},
	{
		"deductible": 5000,
		"coinsurance": 30,
		"carrierId": "slimco",
		"planName": "Basic Med Select STM Plan 2 5000/30/1M Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 11000,
		"premium": 97.96
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "swivelbud",
		"planName": "Swivel Health Choice 5000 / 20 Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": "$50000",
		"maxDurationMonths": 12,
		"outOfPocketMax": 10000,
		"premium": 102.15
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "slimco",
		"planName": "Basic Med Select STM Plan 2 5000/20/1M Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 9000,
		"premium": 103.17
	},
	{
		"deductible": 7500,
		"coinsurance": 30,
		"carrierId": "birch",
		"planName": "Birch Plan 3 7500/30/17500/1500000 Extended",
		"lifetimeMax": 1500000,
		"coinsuranceLimit": 33333.333333333336,
		"maxDurationMonths": 12,
		"outOfPocketMax": 17500,
		"premium": 103.74
	},
	{
		"deductible": 2500,
		"coinsurance": 20,
		"carrierId": "aardvarkhealth",
		"planName": "AardvarkHealth Plan 3 2500/20/6500/1000000",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 20000,
		"maxDurationMonths": 6,
		"outOfPocketMax": 6500,
		"bestSeller": true,
		"premium": 107.95
	},
	{
		"deductible": 5000,
		"coinsurance": 20,
		"carrierId": "regionalstandard",
		"planName": "Regional Standard Enhanced PPO 5000/20/10000/1000000 Extended",
		"lifetimeMax": 1000000,
		"coinsuranceLimit": 25000,
		"maxDurationMonths": 12,
		"outOfPocketMax": 10000,
		"premium": 108.28
	},
	{
		"deductible": 7500,
		"coinsurance": 30,
		"carrierId": "birch",
		"planName": "Birch Plan 3 7500/30/12500/1500000 Extended",
		"lifetimeMax": 1500000,
		"coinsuranceLimit": 16666.666666666668,
		"maxDurationMonths": 12,
		"outOfPocketMax": 12500,
		"premium": 110.32
	}
]