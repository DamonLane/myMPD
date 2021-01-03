"use strict";
/*
 SPDX-License-Identifier: GPL-2.0-or-later
 myMPD (c) 2018-2021 Juergen Mang <mail@jcgames.de>
 https://github.com/jcorporation/mympd
*/

//eslint-disable-next-line no-unused-vars
function logError(line) {
    logLog(0, 'ERROR: ' + line);
}

//eslint-disable-next-line no-unused-vars
function logWarn(line) {
    logLog(1, 'WARN: ' + line);
}

//eslint-disable-next-line no-unused-vars
function logInfo(line) {
    logLog(2, 'INFO: ' + line);
}

//eslint-disable-next-line no-unused-vars
function logVerbose(line) {
    logLog(3, 'VERBOSE: ' + line);
}

//eslint-disable-next-line no-unused-vars
function logDebug(line) {
    logLog(4, 'DEBUG: ' + line);
}

function logLog(loglevel, line) {
    if (settings.loglevel >= loglevel) {
        if (loglevel === 0) {
            console.error(line);
        }
        else if (loglevel === 1) {
            console.warn(line);
        }
        else if (loglevel === 4) {
            console.debug(line);
        }
        else {
            console.log(line);
        }
    }
}
