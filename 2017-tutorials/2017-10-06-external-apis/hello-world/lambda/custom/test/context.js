module.exports = function() {
    return {
        succeed: function(result) {
            console.log(JSON.stringify(result, null,'\t') );
        },
        fail: function(err) {
            console.log(JSON.stringify(err, null,'\t') );
        },
        done: function(err, result) {
            console.log("CONTEXT_DONE:", err, result);
        },
        functionName: 'mock_functionName',
        awsRequestId: 'mock_awsRequestId',
        logGroupName: 'mock_logGroupName',
        logStreamName: 'mock_logStreamName',
        clientContext: 'mock_clientContext',
        identity: {
            cognitoIdentityId: 'mock_cognitoIdentityId'
        }
    };
};
