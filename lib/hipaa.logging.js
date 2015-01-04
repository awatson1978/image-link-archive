// hipaa.logging.js
// version: 12.16.2012

var logToConsole = true;
var logToDatabase = true;

LogLevel = {
    Emergency : 0,
    Alert : 1,
    Critical : 2,
    Error: 3,
    Warning: 4,
    Notice: 5,
    Info: 6,
    Debug: 7,
    Trace: 8,
    Hipaa: 9,
    Drawing: 10
}

log_event = function(message, loglevel){
    if(logToConsole){
        console.log('LogLevel: ' + loglevel + " - "+ message);
    }
    if(logToDatabase){
//  TODO:  create Splunk collection to collect detailed logging data
//        if(loglevel == LogLevel.Hipaa){
//            Hipaa.insert({
//                owner: this.userId,
//                loglevel: loglevel,
//                text: message,
//                timestamp: new Date().getTime()
//            });
//        }
    }
}
log_hipaa_event = function(message, loglevel, owner){
    if(logToConsole){
        console.log(owner + ', LogLevel: ' + loglevel + " - "+ message);
    }
    if(logToDatabase){
        if(loglevel == LogLevel.Hipaa){
            Hipaa.insert({
                owner: owner,
                loglevel: loglevel,
                text: message,
                timestamp: new Date().getTime()
            });
        }
    }
}
