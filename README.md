# Interview Test

Your objective is to implement a front-end that will display a list of quoted health plans. Simple e-commerce functionality will be necessary as well, such as filtering and sorting based on plan attributes via ajax. You can use React with JSX directly by editing `public/client.jsx`. **You're free to use something instead of React** if you so choose; do it with just jQuery and template literals if you want. Don't worry too much about how things look; this is mainly testing your ability to connect an API to an interactive UI.

See [hint.png](./hint.png) to get an idea of what you could make. Again, worry about the interactions more than the appearance. 

## Rules:
- You are free to use any resources available to you including the internet and any libraries you wish to use
- Limit your time to about 1 hour
- Start timing after you've read/digested this readme
- If you don't finish in 1 hour, please provide some comments/explanation on what further work you would do given the time
	- The less you have implemented, the more detailed your explanation should be
	- Spend up to 15 minutes on your explanation
- Upload your project somewhere such as Github or Google Drive and email a link to tosh.goodson@healthpocket.com

&nbsp;

&nbsp;


# Details

The API endpoint is GET `/api/quote` and accepts the query paramters:
- `filter[deductible]=<number>` - Filtering by 1 deductible at a time
- `filter[carrierIds][]=<string>` - Filtering by multiple carrierIds at once
- `sort=<string>` - Valid sorts are "premium" or "deductible".

As an example: `/api/quote?filter[deductible]=5000&filter[carrierIds][]=birch&filter[carrierIds][]=regionalstandard&sort=premium`

The endpoint will respond with JSON with the schema:
```
{
    unfilteredCount: number, // the plan count before applying filters
    plans: {
		deductible: number,
		coinsurance: number,
		carrierId: string,
		planName: string,
		lifetimeMax: number,
		coinsuranceLimit: number,
		maxDurationMonths: number,
		outOfPocketMax: number,
		premium: number
	}, // the plans with applicable filters and sort applied
    filters: {
        deductible: number[], // a list of all unique deductibles, sorted ascending
        carrierId: string[] // a list of all unique carrierIds, sorted alphabetically
    }
}
```


## Necessary dependencies

- node
- npm

## Starting the server

Run `npm install`.  
Run `npm run start`.  
You will be able to access the server at http://localhost:7000.

## Static files

Files located in the public directory will be served directly. 