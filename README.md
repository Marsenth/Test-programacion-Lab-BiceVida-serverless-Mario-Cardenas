### REST API STEPS ###

# COMPILE STEPS
- npm install -g serverless
- npm run install
- ibmcloud login 
- ibmcloud target --cf
- ibmcloud wsk property get --auth
- cp ~/.wskprops <project_path>/.wskprops
- serverless deploy


# CURRENT ENDPOINT
GET https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/d855274b5d25b0b74645b471eb15bf7680d95da0f88c57c35296800dfe66dd0a/company-cost
