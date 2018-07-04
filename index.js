'use strict';
var response = require ('./response')

//-------------------Alexa show supporting methods------------------------------------------
var applePicURL = "https://s3.amazonaws.com/osmosis-sales-images/diagram+(16).png";


// --------------- Helpers that build all of the responses -----------------------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession, imageUrl, hintStr) {
    return {
        outputSpeech: {
            "type": 'SSML',
            "ssml": output,
        },
        "directives": [{
                "type": "Hint",
                "hint": {
                    "type": "PlainText",
                    "text": hintStr,
                }
            },
            {
                "type": "Display.RenderTemplate",
                "token": "testToken",
                "template": {
                             "type": "BodyTemplate7",
                             "token": "YoAnnish",
                             "backButton": "HIDDEN",
                             "title": hintStr,
                "backgroundImage": {
                             "contentDescription": "Textured grey background",
                        "sources": [
                                 {
                                    "url": "https://www.example.com/background-image1.png"
                                 }
                                   ]
                                   },
                        "image": {
                              "contentDescription": hintStr,
                        "sources": [
                                 {
                              "url": imageUrl
                                 }
                                   ]
                                  }
                            }
            }
        ],
        card: {
            type: 'Simple',
            title: `SessionSpeechlet - ${title}`,
            content: `SessionSpeechlet - ${output}`,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        },
        shouldEndSession,
    };
}
function buildSpeechletResponseV(title, output, repromptText, shouldEndSession, imageUrl, hintStr) {
    return {
        outputSpeech: {
            "type": 'SSML',
            "ssml": output,
        },
        "directives": [{
                "type": "Hint",
                "hint": {
                    "type": "PlainText",
                    "text": hintStr,
                }
            },
            {
                "type": "Display.RenderTemplate",
                "token": "testToken",
                "template": {
                             "type": "BodyTemplate7",
                             "token": "YoAnnish",
                             "backButton": "HIDDEN",
                             "title": hintStr,
                "backgroundImage": {
                             "contentDescription": "Textured grey background",
                        "sources": [
                                 {
                                    "url": imageUrl
                                 }
                                   ]
                                   },
                        "image": {
                              "contentDescription": hintStr,
                        "sources": [
                                 {
                              "url": ""
                                 }
                                   ]
                                  }
                            }
            }
        ],
        card: {
            type: 'Simple',
            title: `SessionSpeechlet - ${title}`,
            content: `SessionSpeechlet - ${output}`,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        },
        shouldEndSession,
    };
}

//----------------------------list template response-------------------------------
function buildSpeechletResponseM(title, output, repromptText, shouldEndSession, imageUrl, hintStr) {
   
    return {
        "shouldEndSession": false,
        "outputSpeech": {
            "type": "SSML",
            "ssml": output
        },
        "reprompt": {
            "outputSpeech": {
                "type": "SSML",
                "ssml": output
            }
        },
        "card": {
            "type": "Standard",
            "title": "options",
            
            "text": "conversion , CLTV or cross/upsell"
        },
        "directives": [
            {
                "type": "Hint",
                "hint": {
                    "type": "PlainText",
                    "text": " "
                }
            },
            {
                "type": "Display.RenderTemplate",
                "template": {
                    "type": "ListTemplate2",
                    "title": "You can select from Conversion, CLTV or Cross/Upsell",
                    "token": "TOKEN",
                    "listItems": [
                          {
                             "token": "conversion",
                             "image": {
                                "contentDescription": "Item Description",
                                "sources": [
                                    {
                                        "url": "https://s3.amazonaws.com/osmosis-sales-images/more1.JPG",
                                        "widthPixels": 280,
                                        "heightPixels": 280,
                                        "size": "X_SMALL"
                                    }
                                ]
                            },
                          "textContent":{
                              "primaryText": {
                                    "type": "RichText",
                                    "text": "<b>Conversion</b>"
                              }
} 
    },
                        
                        {
                            "token": "cltv",
                            "image": {
                                "contentDescription": "Item Description",
                                "sources": [
                                    {
                                        "url": "https://s3.amazonaws.com/osmosis-sales-images/more2.JPG",
                                        "widthPixels": 280,
                                        "heightPixels": 280,
                                        "size": "X_SMALL"
                                    }
                                ]
                            },
                            "textContent": {
                                "primaryText": {
                                    "text": "<b>CLTV</b>",
                                    "type": "RichText"
                                },
                                "secondaryText": {
                                    "text": " ",
                                    "type": "PlainText"
                                },
                                "tertiaryText": {
                                    "text": " ",
                                    "type": "PlainText"
                                }
                            }
                        },
                        {
                            "token": "cross",
                            "image": {
                                "contentDescription": "Item Description",
                                "sources": [
                                    {
                                        "url": "https://s3.amazonaws.com/osmosis-sales-images/more3.JPG",
                                        "widthPixels": 280,
                                        "heightPixels": 280,
                                        "size": "X_SMALL"
                                    }
                                ]
                            },
                            "textContent": {
                                "primaryText": {
                                    "text": "<b>Cross/Upsell</b>",
                                    "type": "RichText"
                                },
                                "secondaryText": {
                                    "text": " ",
                                    "type": "PlainText"
                                },
                                "tertiaryText": {
                                    "text": " ",
                                    "type": "PlainText"
                                }
                            }
                        }
                    ],
                    "backgroundImage": {
                        "sources": [
                            {
                                "url": " "
                            }
                        ]
                    },
                    "backButton": "HIDDEN"
                }
            }
        ]
    };
}



function buildResponse(sessionAttributes, speechletResponse) {
    console.log("Responding with " + JSON.stringify(speechletResponse));
    return {
        version: '1.0',
        sessionAttributes,
        response: speechletResponse,
    };
}


//Welcome message
function getWelcomeResponse(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Welcome';
    const speechOutput = "<speak>Hello! Welcome to Smart Marketer. Ask me for flash briefing or say More for more details</speak>";
    const repromptText = '<speak>please select from Conversion, CLTV or Cross or Upsell</speak>';
    const shouldEndSession = false;
        var image = 'https://s3.amazonaws.com/osmosis-sales-images/Splash.png';
       //var image ="https://s3.amazonaws.com/osmosis-sales-images/Smart+Marketer+Welcome+01.jpg"
        var hint = " ";//"                                                 Welcome to Smart Marketer";
        callback(sessionAttributes,
            buildSpeechletResponseV(cardTitle, speechOutput, repromptText, shouldEndSession, image, hint));
}



function defaultResponse(callback) {
    var speechOutput = "<speak>Sorry, I did not hear that well. you can select from ‘Conversion’, ‘CLTV’ or ‘Cross or Upsell’ </speak>";
    var sessionAttributes;
    var repromptText = " ";
    var shouldEndSession = false;
    var image = 'https://s3.amazonaws.com/osmosis-sales-images/sorry.png';
        var hint = "you can select from ‘Conversion’, ‘CLTV’ or ‘Cross or Upsell’";
        callback(sessionAttributes,
            buildSpeechletResponseM(null, speechOutput, repromptText, shouldEndSession, image, hint));
}

//----------------Show response function-----------------
 function responseFunction(request, session, callback){
    var speechOutput;
    var sessionAttributes;
    var repromptText = "<speak>please, select from ‘Conversion’, ‘CLTV’ or ‘Cross or Upsell’</speak>";
    var shouldEndSession = false;
    var image ;
    var intent = request.intent;
    var hint;
    var cardTitle;
    var slotvalue = intent.slots.options.value;
    console.log("----------slot value-----------",slotvalue);
    if(slotvalue === "CLTV" || slotvalue === "c l T v" || slotvalue === "cltv" || slotvalue === "customer life time" || slotvalue === "customer life time value" || slotvalue === "customer life" || slotvalue === "time value" || slotvalue ==="customer value"){
        speechOutput = response.data.cltv.res;
        cardTitle = speechOutput;
        image = response.data.cltv.img;
        hint = response.data.cltv.imgRes;
    
    }else  if(slotvalue === "conversion"){
        speechOutput = response.data.conversion.res;
        cardTitle = speechOutput;
        image = response.data.conversion.img;
        hint = response.data.conversion.imgRes;
    
    }else  if(slotvalue === "cross" || slotvalue === "cross or upsell" || slotvalue === "cross upsell" || slotvalue === "upsell" || slotvalue ==="cross sell"){
        speechOutput = response.data.cross.res;
        cardTitle = speechOutput;
        image = response.data.cross.img;
        hint = response.data.cross.imgRes;
    
    }else {
        speechOutput = response.data.flash.res;
        cardTitle = speechOutput;
        image = response.data.flash.img;
        hint = response.data.flash.imgRes;
    
    }
   callback(sessionAttributes,
            buildSpeechletResponseV(cardTitle, speechOutput, repromptText, shouldEndSession, image, hint));
 }

//--------------More Function-------------
function MoreFunction(callback){
    var speechOutput = "<speak>please select from  ‘Conversion’, ‘CLTV’ or ‘Cross or Upsell’,to know more about the respective KPIs </speak>";
    var sessionAttributes;
    var repromptText = " ";
    var shouldEndSession = false;
    var image = '';
    var hint = "select from ‘Conversion’, ‘CLTV’ or ‘Cross or Upsell’";
    var cardTitle = "HELP";
   callback(sessionAttributes,
            buildSpeechletResponseM(cardTitle, speechOutput, repromptText, shouldEndSession, image, hint));
}


//---------------Help Intent Response-------------------
function helpFunction(callback){
    var speechOutput = "<speak>I can give you flash briefing on ‘Conversion’, ‘CLTV’ or ‘Cross or Upsell’</speak>";
    var sessionAttributes;
    var repromptText = " ";
    var shouldEndSession = false;
    var image = 'https://s3.amazonaws.com/osmosis-sales-images/i-need-help-clipart-1.jpg';
    var hint = "Select from ‘Conversion’, ‘CLTV’ or ‘Cross or Upsell’"
    var cardTitle = "HELP"
   callback(sessionAttributes,
            buildSpeechletResponseM(cardTitle, speechOutput, repromptText, shouldEndSession, image, hint));
}

//Alexa handling functions

function handleSessionEndRequest(request, session, callback) {
    //sendResponseInEmail();
    const cardTitle = 'Session Ended';
    const speechOutput = '<speak>Thank you! have a nice day</speak>';
    const shouldEndSession = true;
    var image = 'https://s3.amazonaws.com/osmosis-sales-images/L_DBED.tmp.PNG';
    callback({}, buildSpeechletResponseV(cardTitle, speechOutput, null, shouldEndSession, image));
}


/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(request, session, callback) {
    //console.log(`onLaunch requestId=${launchRequest.requestId}, sessionId=${session.sessionId}`);
    console.log("in launchRequest");
    console.log("  request: " + JSON.stringify(request));
    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

function onSessionStarted(sessionStartedRequest, session) {
    console.log(`onSessionStarted requestId=${sessionStartedRequest.requestId}, sessionId=${session.sessionId}`);
}
/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log(`onSessionEnded requestId=${sessionEndedRequest.requestId}, sessionId=${session.sessionId}`);
    // Add cleanup logic here
}

function onTouch(request, session, callback) {
    //console.log(`onIntent requestId=${intentRequest.requestId}, sessionId=${session.sessionId}`);
    console.log("in onTouch");
    //const intent = request.intent;
   console.log("------------this is the request-----------",request.type);
   console.log("------------this is the button-----------",request.token);
    var token=request.token
 var speechOutput;
    var sessionAttributes;
    var repromptText = "<speak>please, select from ‘Conversion’, ‘CLTV’ or ‘Cross or Upsell’</speak>";
    var shouldEndSession = false;
    var image ;
    var intent = request.intent;
    var hint;
    var cardTitle;
   if(token === "CLTV" || token === "c l T v" || token === "cltv"){
        speechOutput = response.data.cltv.res;
        cardTitle = speechOutput;
        image = response.data.cltv.img;
        hint = response.data.cltv.imgRes;
    
    }else  if(token === "conversion"){
        speechOutput = response.data.conversion.res;
        cardTitle = speechOutput;
        image = response.data.conversion.img;
        hint = response.data.conversion.imgRes;
    
    }else  if(token === "cross" || token === "cross or upsell" || token === "cross upsell" || token === "upsell"){
        speechOutput = response.data.cross.res;
        cardTitle = speechOutput;
        image = response.data.cross.img;
        hint = response.data.cross.imgRes;
    
    }else {
        speechOutput = "<speak>Sorry</speak>";
        cardTitle = speechOutput;
        image = response.data.flash.img;
        hint = response.data.flash.imgRes;
    
    }
   callback(sessionAttributes,
            buildSpeechletResponseV(cardTitle, speechOutput, repromptText, shouldEndSession, image, hint));
 
}

function onIntent(request, session, callback) {
    //console.log(`onIntent requestId=${intentRequest.requestId}, sessionId=${session.sessionId}`);
    console.log("in onIntent");
    //const intent = request.intent;
    const intentName = request.intent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'selectOption') {
        responseFunction(request, session, callback);
    }
    else if (intentName === 'More') {
        MoreFunction(callback);
    }
     else if (intentName === 'Error') {
        defaultResponse(callback);
    }
    else if (intentName === 'AMAZON.HelpIntent') {
        helpFunction(callback);
    }
    else if (intentName === 'AMAZON.StopIntent' || intentName === 'AMAZON.CancelIntent') {
        handleSessionEndRequest(request, session, callback);
    }
    else {
        defaultResponse(callback);
        // throw new Error('Invalid intent');
    }
}


// --------------- Main handler -----------------------

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = (event, context, callback) => {
    try {
        // console.log(`event.session.application.applicationId=${event.session.application.applicationId}`);
        console.log("EVENT=====" + JSON.stringify(event));

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

        // if (event.session.application.applicationId !== 'amzn1.ask.skill.1c5862b3-4b3c-4502-b87f-d9d61b105b30') {
        //      callback('Invalid Application ID');
        // }


        if (event.session) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === 'LaunchRequest') {
            onLaunch(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        }
        else if (event.request.type === 'IntentRequest') {
            onIntent(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        }
         else if (event.request.type === 'Display.ElementSelected') {
            onTouch(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        }
        else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            callback();
        }
    }
    catch (err) {
        callback(err);
    }
};
