const express = require('express');
const router = express.Router();
const structjson = require('./structjson.js');

const config = require('../config/keys')

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const langCode = config.dialogFlowSessionLanguageCode;

const dialogflow = require('dialogflow');
const uuid = require('uuid');

// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

router.post('/textQuery', async (req, res) => {
    // We need to send some information that comes from the client to Diaflows

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: langCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    res.send(result);

})



router.post('/eventQuery', async (req, res) => {
    // We need to send some information that comes from the client to Diaflows

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: req.body.event,
                // The language used by the client (en-US)
                languageCode: langCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    res.send(result);

})


module.exports = router;
