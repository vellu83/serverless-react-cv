import * as sst from '@serverless-stack/resources';

export default class MyStack extends sst.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        const stage = this.node.root.stage

        // Create a HTTP API
        const api = new sst.Api(this, 'Api', {
            routes: {
                'GET /': {
                    function: {
                        //bundle: false,
                        srcPath: 'src/',
                        handler: 'lambda.root',
                    },
                },
            },
        });
        api.addRoutes(this, {
            'GET /jobs': {
                function: {
                    //  bundle: false,
                    srcPath: 'src/',
                    handler: 'lambda.jobs',
                    environment: {
                        MONGODB_URI: process.env.MONGODB_URI,
                    },
                },
            },
            'GET /education': {
                function: {
                    //bundle: false,
                    srcPath: 'src/',
                    handler: 'lambda.edu',
                    environment: {
                        MONGODB_URI: process.env.MONGODB_URI,
                    },
                },
            },
            'GET /links': {
                function: {
                    //bundle: false,
                    srcPath: 'src/',
                    handler: 'lambda.links',
                    environment: {
                        MONGODB_URI: process.env.MONGODB_URI,
                    },
                },
            },
            'GET /hobbies': {
                function: {
                    //bundle: false,
                    srcPath: 'src/',
                    handler: 'lambda.hobbies',
                    environment: {
                        MONGODB_URI: process.env.MONGODB_URI,
                    },
                },
            },
        });

        const site = new sst.ReactStaticSite(this, 'ReactSite', {
            path: 'frontend',
            environment: {
                // Pass in the API endpoint to our app
                REACT_APP_API_URL: api.url,
            },

            customDomain: {
                domainName: stage === 'dev' ? 'dev.vellu.info' : 'vellu.info',
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