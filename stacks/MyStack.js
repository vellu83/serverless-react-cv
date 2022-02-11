import * as sst from '@serverless-stack/resources';

export default class MyStack extends sst.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        // Create a HTTP API
        const api = new sst.Api(this, 'Api', {
            routes: {
                'GET /': 'src/lambda.handler',
            },
        });

        const site = new sst.ReactStaticSite(this, 'ReactSite', {
            path: 'frontend',
            environment: {
                // Pass in the API endpoint to our app
                REACT_APP_API_URL: api.url,
            },
            customDomain: {
                domainName: 'vellu.info',
                hostedZone: 'vellu.info',
            },
        });

        // Show the endpoint in the output
        this.addOutputs({
            SiteUrl: site.url,
            ApiEndpoint: api.url,
        });
    }
}