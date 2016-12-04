//
//  Created by Ebubekir Ogden on 12/03/16.
//  Copyright © 2016 Ebubekir Ogden. All rights reserved.
//

document.getElementById('fileSelect').addEventListener('change', fileSelected, false);

function fileSelected(event) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        const file = event.target.files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function(f) {
                var result = f.target.result;

                var splittedArray = result.split('\n'); // Split Each Line to Array

                var fileLength = splittedArray.length; // File Cursor Length

                var result = []; // Our JSON output from CSV file

                var nonNumberAttributes = [];

                var headers = splittedArray[0].split(";"); // Attributes

                var jobCount = {
                        "admin": 0,
                        "blue_collar": 0,
                        "entrepreneur": 0,
                        "housemaid": 0,
                        "management": 0,
                        "retired": 0,
                        "self_employed": 0,
                        "services": 0,
                        "student": 0,
                        "technician": 0,
                        "unemployed": 0,
                        "unknown": 0
                    },
                    maritalCount = {
                        "divorced": 0,
                        "married": 0,
                        "single": 0,
                        "unknown": 0
                    },
                    educationCount = {
                        "basic_4y": 0,
                        "basic_6y": 0,
                        "basic_9y": 0,
                        "high_school": 0,
                        "illiterate": 0,
                        "professional_course": 0,
                        "university_degree": 0,
                        "unknown": 0
                    },
                    defaultCount = {
                        "no": 0,
                        "yes": 0,
                        "unknown": 0
                    },
                    housingCount = {
                        "no": 0,
                        "yes": 0,
                        "unknown": 0
                    },
                    loanCount = {
                        "no": 0,
                        "yes": 0,
                        "unknown": 0
                    },
                    contactCount = {
                        "cellular": 0,
                        "telephone": 0
                    },
                    monthCount = {
                        "jan": 0,
                        "feb": 0,
                        "mar": 0,
                        "apr": 0,
                        "may": 0,
                        "jun": 0,
                        "jul": 0,
                        "aug": 0,
                        "sep": 0,
                        "oct": 0,
                        "nov": 0,
                        "dec": 0
                    },
                    dayOfWeekCount = {
                        "mon": 0,
                        "tue": 0,
                        "wed": 0,
                        "thu": 0,
                        "fri": 0,
                        "sat": 0,
                        "sun": 0,
                    },
                    poutcomeCount = {
                        "failure": 0,
                        "nonexistent": 0,
                        "success": 0
                    },
                    yCount = {
                        "yes": 0,
                        "no": 0
                    };

                // Frequency Arrays Have Will Using in Future for to Calculate Lead One. We Will Store Headers Frequencies as an Object.
                var jobsFrequency = [],
                    maritalFrequency = [],
                    educationFrequency = [],
                    defaultFrequency = [],
                    housingFrequency = [],
                    loanFrequency = [],
                    contactFrequency = [],
                    monthFrequency = [],
                    dayOfWeekFrequency = [],
                    poutFrequency = [],
                    yFrequency = [];

                var root;

                for (var i = headers.length; i--;) {
                    headers[i] = headers[i].replace(/\"/g, ""); // Delete Quotation Mark from Header
                }

                for (var i = 1; i < fileLength - 1; i++) { // Convert CSV File to JSON Object
                    var obj = {}; // Will use for JSON object

                    var currentLine = splittedArray[i].split(";"); // Current Line

                    for (var j = 0; j < headers.length; j++) {
                        currentLine[j] = currentLine[j].replace(/\"/g, "");
                        obj[headers[j]] = currentLine[j]; // Each Line's Attribute Assigning to Header's Attribute
                    }

                    result.push(obj);
                }

                for (var key in result[0]) { // We are checking not number attributes for empathy
                    if (isNaN(result[0][key])) {
                        nonNumberAttributes.push(key);
                    }
                }

                for (var i = 0; i < result.length; i++) {
                    for (var j = 0; j < nonNumberAttributes.length; j++) {
                        if (nonNumberAttributes[j] == "job" && nonNumberAttributes[j] === "job") {
                            jobCount.admin += (result[i][nonNumberAttributes[j]] == "admin." && result[i][nonNumberAttributes[j]] === "admin.") ? 1 : 0;
                            jobCount.blue_collar += (result[i][nonNumberAttributes[j]] == "blue-collar" && result[i][nonNumberAttributes[j]] === "blue-collar") ? 1 : 0;
                            jobCount.entrepreneur += (result[i][nonNumberAttributes[j]] == "entrepreneur" && result[i][nonNumberAttributes[j]] === "entrepreneur") ? 1 : 0;
                            jobCount.housemaid += (result[i][nonNumberAttributes[j]] == "housemaid" && result[i][nonNumberAttributes[j]] === "housemaid") ? 1 : 0;
                            jobCount.management += (result[i][nonNumberAttributes[j]] == "management" && result[i][nonNumberAttributes[j]] === "management") ? 1 : 0;
                            jobCount.retired += (result[i][nonNumberAttributes[j]] == "retired" && result[i][nonNumberAttributes[j]] === "retired") ? 1 : 0;
                            jobCount.self_employed += (result[i][nonNumberAttributes[j]] == "self-employed" && result[i][nonNumberAttributes[j]] === "self-employed") ? 1 : 0;
                            jobCount.services += (result[i][nonNumberAttributes[j]] == "services" && result[i][nonNumberAttributes[j]] === "services") ? 1 : 0;
                            jobCount.student += (result[i][nonNumberAttributes[j]] == "student" && result[i][nonNumberAttributes[j]] === "student") ? 1 : 0;
                            jobCount.technician += (result[i][nonNumberAttributes[j]] == "technician" && result[i][nonNumberAttributes[j]] === "technician") ? 1 : 0;
                            jobCount.unemployed += (result[i][nonNumberAttributes[j]] == "unemployed" && result[i][nonNumberAttributes[j]] === "unemployed") ? 1 : 0;
                            jobCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0
                        } else if (nonNumberAttributes[j] == "marital" && nonNumberAttributes[j] === "marital") {
                            maritalCount.divorced += (result[i][nonNumberAttributes[j]] == "divorced" && result[i][nonNumberAttributes[j]] === "divorced") ? 1 : 0;
                            maritalCount.married += (result[i][nonNumberAttributes[j]] == "married" && result[i][nonNumberAttributes[j]] === "married") ? 1 : 0;
                            maritalCount.single += (result[i][nonNumberAttributes[j]] == "single" && result[i][nonNumberAttributes[j]] === "single") ? 1 : 0;
                            maritalCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        } else if (nonNumberAttributes[j] == "education" && nonNumberAttributes[j] === "education") {
                            educationCount.basic_4y += (result[i][nonNumberAttributes[j]] == "basic.4y" && result[i][nonNumberAttributes[j]] === "basic.4y") ? 1 : 0;
                            educationCount.basic_6y += (result[i][nonNumberAttributes[j]] == "basic.6y" && result[i][nonNumberAttributes[j]] === "basic.6y") ? 1 : 0;
                            educationCount.basic_9y += (result[i][nonNumberAttributes[j]] == "basic.9y" && result[i][nonNumberAttributes[j]] === "basic.9y") ? 1 : 0;
                            educationCount.high_school += (result[i][nonNumberAttributes[j]] == "high.school" && result[i][nonNumberAttributes[j]] === "high.school") ? 1 : 0;
                            educationCount.illiterate += (result[i][nonNumberAttributes[j]] == "illiterate" && result[i][nonNumberAttributes[j]] === "illiterate") ? 1 : 0;
                            educationCount.professional_course += (result[i][nonNumberAttributes[j]] == "professional.course" && result[i][nonNumberAttributes[j]] === "professional.course") ? 1 : 0;
                            educationCount.university_degree += (result[i][nonNumberAttributes[j]] == "university.degree" && result[i][nonNumberAttributes[j]] === "university.degree") ? 1 : 0;
                            educationCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        } else if (nonNumberAttributes[j] == "default" && nonNumberAttributes[j] === "default") {
                            defaultCount.no += (result[i][nonNumberAttributes[j]] == "no" && result[i][nonNumberAttributes[j]] === "no") ? 1 : 0;
                            defaultCount.yes += (result[i][nonNumberAttributes[j]] == "yes" && result[i][nonNumberAttributes[j]] === "yes") ? 1 : 0;
                            defaultCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        } else if (nonNumberAttributes[j] == "housing" && nonNumberAttributes[j] === "housing") {
                            housingCount.no += (result[i][nonNumberAttributes[j]] == "no" && result[i][nonNumberAttributes[j]] === "no") ? 1 : 0;
                            housingCount.yes += (result[i][nonNumberAttributes[j]] == "yes" && result[i][nonNumberAttributes[j]] === "yes") ? 1 : 0;
                            housingCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        } else if (nonNumberAttributes[j] == "loan" && nonNumberAttributes[j] === "loan") {
                            loanCount.no += (result[i][nonNumberAttributes[j]] == "no" && result[i][nonNumberAttributes[j]] === "no") ? 1 : 0;
                            loanCount.yes += (result[i][nonNumberAttributes[j]] == "yes" && result[i][nonNumberAttributes[j]] === "yes") ? 1 : 0;
                            loanCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        } else if (nonNumberAttributes[j] == "contact" && nonNumberAttributes[j] === "contact") {
                            contactCount.cellular += (result[i][nonNumberAttributes[j]] == "cellular" && result[i][nonNumberAttributes[j]] === "cellular") ? 1 : 0;
                            contactCount.telephone += (result[i][nonNumberAttributes[j]] == "telephone" && result[i][nonNumberAttributes[j]] === "telephone") ? 1 : 0;
                        } else if (nonNumberAttributes[j] == "month" && nonNumberAttributes[j] === "month") {
                            monthCount.jan += (result[i][nonNumberAttributes[j]] == "jan" && result[i][nonNumberAttributes[j]] === "jan") ? 1 : 0;
                            monthCount.feb += (result[i][nonNumberAttributes[j]] == "feb" && result[i][nonNumberAttributes[j]] === "feb") ? 1 : 0;
                            monthCount.mar += (result[i][nonNumberAttributes[j]] == "mar" && result[i][nonNumberAttributes[j]] === "mar") ? 1 : 0;
                            monthCount.apr += (result[i][nonNumberAttributes[j]] == "apr" && result[i][nonNumberAttributes[j]] === "apr") ? 1 : 0;
                            monthCount.may += (result[i][nonNumberAttributes[j]] == "may" && result[i][nonNumberAttributes[j]] === "may") ? 1 : 0;
                            monthCount.jun += (result[i][nonNumberAttributes[j]] == "jun" && result[i][nonNumberAttributes[j]] === "jun") ? 1 : 0;
                            monthCount.jul += (result[i][nonNumberAttributes[j]] == "jul" && result[i][nonNumberAttributes[j]] === "jul") ? 1 : 0;
                            monthCount.aug += (result[i][nonNumberAttributes[j]] == "aug" && result[i][nonNumberAttributes[j]] === "aug") ? 1 : 0;
                            monthCount.sep += (result[i][nonNumberAttributes[j]] == "sep" && result[i][nonNumberAttributes[j]] === "sep") ? 1 : 0;
                            monthCount.oct += (result[i][nonNumberAttributes[j]] == "oct" && result[i][nonNumberAttributes[j]] === "oct") ? 1 : 0;
                            monthCount.nov += (result[i][nonNumberAttributes[j]] == "nov" && result[i][nonNumberAttributes[j]] === "nov") ? 1 : 0;
                            monthCount.dec += (result[i][nonNumberAttributes[j]] == "dec" && result[i][nonNumberAttributes[j]] === "dec") ? 1 : 0;
                        } else if (nonNumberAttributes[j] == "day_of_week" && nonNumberAttributes[j] === "day_of_week") {
                            dayOfWeekCount.mon += (result[i][nonNumberAttributes[j]] == "mon" && result[i][nonNumberAttributes[j]] === "mon") ? 1 : 0;
                            dayOfWeekCount.tue += (result[i][nonNumberAttributes[j]] == "tue" && result[i][nonNumberAttributes[j]] === "tue") ? 1 : 0;
                            dayOfWeekCount.wed += (result[i][nonNumberAttributes[j]] == "wed" && result[i][nonNumberAttributes[j]] === "wed") ? 1 : 0;
                            dayOfWeekCount.thu += (result[i][nonNumberAttributes[j]] == "thu" && result[i][nonNumberAttributes[j]] === "thu") ? 1 : 0;
                            dayOfWeekCount.fri += (result[i][nonNumberAttributes[j]] == "fri" && result[i][nonNumberAttributes[j]] === "fri") ? 1 : 0;
                            dayOfWeekCount.sat += (result[i][nonNumberAttributes[j]] == "sat" && result[i][nonNumberAttributes[j]] === "sat") ? 1 : 0;
                            dayOfWeekCount.sun += (result[i][nonNumberAttributes[j]] == "sun" && result[i][nonNumberAttributes[j]] === "sun") ? 1 : 0;
                        } else if (nonNumberAttributes[j] == "poutcome" && nonNumberAttributes[j] === "poutcome") {
                            poutcomeCount.failure += (result[i][nonNumberAttributes[j]] == "failure" && result[i][nonNumberAttributes[j]] === "failure") ? 1 : 0;
                            poutcomeCount.nonexistent += (result[i][nonNumberAttributes[j]] == "nonexistent" && result[i][nonNumberAttributes[j]] === "nonexistent") ? 1 : 0;
                            poutcomeCount.success += (result[i][nonNumberAttributes[j]] == "success" && result[i][nonNumberAttributes[j]] === "success") ? 1 : 0;
                        } else if (nonNumberAttributes[j].trim() == "y" && nonNumberAttributes[j].trim() === "y") {
                            yCount.yes += (result[i][nonNumberAttributes[j]].trim() == "yes" && result[i][nonNumberAttributes[j]].trim() === "yes") ? 1 : 0;
                            yCount.no += (result[i][nonNumberAttributes[j]].trim() == "no" && result[i][nonNumberAttributes[j]].trim() === "no") ? 1 : 0;
                        }
                    }
                }

                // result.length is our line number so we will use this number for calculating frequency

                // Rate Arrays Have Will Using in Future for ID3 Tree!
                var jobRootRateArray = [],
                    maritalRateArray = [],
                    educationRateArray = [],
                    defaultRateArray = [],
                    housingRateArray = [],
                    loanRateArray = [],
                    contactRateArray = [],
                    monthRateArray = [],
                    dayOfWeekRateArray = [],
                    poutComeRateArray = [],
                    yRateArray = [];

                var count = 0;

                /*************/
                // Job Frequency Calculation START !

                for (var key in jobCount) {
                    var obj = {}
                    obj[key] = (jobCount[key] / result.length) * 100
                    jobsFrequency.push(obj);
                }
                // Job Frequency Calculation FINISH !

                /*          */
                // Define Lead One in Jobs START !

                for (var i = 0; i < Object.keys(jobCount).length; i++) { // jobCount Object Length

                    var a = (jobCount[Object.keys(jobCount)[i]] / result.length) * 100;
                    jobRootRateArray.push(a);
                }

                jobRootRateArray.sort(descendingOrder);


                for (var key in jobCount) { // Define Lead One in Jobs
                    if(jobRootRateArray[0] == jobsFrequency[count][key] && jobRootRateArray[0] === jobsFrequency[count][key]){ // Find Lead One In Jobs
                      console.log(key);
                    }
                    count++;
                }

                // Define Lead One in Jobs FINISH !
                /*          */

                /*************/
                // Marital Frequency Calculation START !

                for (var key in maritalCount) {
                    var obj = {}
                    obj[key] = (maritalCount[key] / result.length) * 100
                    maritalFrequency.push(obj);
                }
                // Marital Frequency Calculation FINISH !

                /*          */
                // Define Lead One in Marital START !

                count = 0;

                for (var i = 0; i < Object.keys(maritalCount).length; i++) { // maritalCount Object Length

                    var a = (maritalCount[Object.keys(maritalCount)[i]] / result.length) * 100;
                    maritalRateArray.push(a);
                }

                maritalRateArray.sort(descendingOrder);


                for (var key in maritalCount) { // Define Lead One in Marital
                    if(maritalRateArray[0] == maritalFrequency[count][key] && maritalRateArray[0] === maritalFrequency[count][key]){ // Find Lead One In Marital
                      console.log(key);
                    }
                    count++;
                }

                // Define Lead One in Marital FINISH !
                /*          */

                /*************/
                // Education Frequency Calculation START !
                for (var key in educationCount) {
                    var obj = {}
                    obj[key] = (educationCount[key] / result.length) * 100
                    educationFrequency.push(obj);
                }

                // Education Frequency Calculation FINISH!

                /*          */
                // Define Lead One in Education START!

                count = 0;

                for (var i = 0; i < Object.keys(educationCount).length; i++) {

                    var a = (educationCount[Object.keys(educationCount)[i]] / result.length) * 100;
                    educationRateArray.push(a);
                }

                educationRateArray.sort(descendingOrder);

                for (var key in educationCount) { // Define Lead One in Education
                    if(educationRateArray[0] == educationFrequency[count][key] && educationRateArray[0] === educationFrequency[count][key]){  // Find Lead One In Education
                      console.log(key);
                    }
                    count++;
                }
                // Define Lead One in Education FINISH!
                /*          */

                /*************/
                // Default Frequency Calculation START!
                for (var key in defaultCount) {
                    var obj = {}
                    obj[key] = (defaultCount[key] / result.length) * 100
                    defaultFrequency.push(obj);
                }
                // Default Frequency Calculation FINISH!

                /*          */
                // Define Lead One in Default START!

                count = 0;

                for (var i = 0; i < Object.keys(defaultCount).length; i++) {

                    var a = (defaultCount[Object.keys(defaultCount)[i]] / result.length) * 100;
                    defaultRateArray.push(a);
                }

                defaultRateArray.sort(descendingOrder);

                for (var key in defaultCount) { // Define Lead One in Default
                    if(defaultRateArray[0] == defaultFrequency[count][key] && defaultRateArray[0] === defaultFrequency[count][key]){  // Find Lead One In Default
                      console.log(key);
                    }
                    count++;
                }
                // Define Lead One in Default FINISH!
                /*          */

                /*************/
                // Housing Frequency Calculation START!
                for (var key in housingCount) {
                    var obj = {}
                    obj[key] = (housingCount[key] / result.length) * 100
                    housingFrequency.push(obj);
                }
                // Housing Frequency Calculation FINISH!

                /*          */
                // Define Lead One in Housing START!

                count = 0;

                for (var i = 0; i < Object.keys(housingCount).length; i++) {

                    var a = (housingCount[Object.keys(housingCount)[i]] / result.length) * 100;
                    housingRateArray.push(a);
                }

                housingRateArray.sort(descendingOrder);

                for (var key in housingCount) { // Define Lead One in Housing
                    if(housingRateArray[0] == housingFrequency[count][key] && housingRateArray[0] === housingFrequency[count][key]){  // Find Lead One In Housing
                      console.log(key);
                    }
                    count++;
                }
                // Define Lead One in Housing FINISH!
                /*          */

                /*************/
                // Loan Frequency Calculation START!
                for (var key in loanCount) {
                    var obj = {}
                    obj[key] = (loanCount[key] / result.length) * 100
                    loanFrequency.push(obj);
                }
                // Loan Frequency Calculation FINISH!

                /*          */
                // Define Lead One in Loan START!

                count = 0;

                for (var i = 0; i < Object.keys(loanCount).length; i++) {

                    var a = (loanCount[Object.keys(loanCount)[i]] / result.length) * 100;
                    loanRateArray.push(a);
                }

                loanRateArray.sort(descendingOrder);

                for (var key in loanCount) { // Define Lead One in Loan
                    if(loanRateArray[0] == loanFrequency[count][key] && loanRateArray[0] === loanFrequency[count][key]){  // Find Lead One In Loan
                      console.log(key);
                    }
                    count++;
                }
                // Define Lead One in Loan FINISH!
                /*          */


                /*************/
                // Contact Frequency Calculation START!
                for (var key in contactCount) {
                    var obj = {}
                    obj[key] = (contactCount[key] / result.length) * 100
                    contactFrequency.push(obj);
                }
                // Contact Frequency Calculation FINISH!

                /*          */
                // Define Lead One in Contact START!

                count = 0;

                for (var i = 0; i < Object.keys(contactCount).length; i++) {

                    var a = (contactCount[Object.keys(contactCount)[i]] / result.length) * 100;
                    contactRateArray.push(a);
                }

                contactRateArray.sort(descendingOrder);

                for (var key in contactCount) { // Define Lead One in Contact
                    if(contactRateArray[0] == contactFrequency[count][key] && contactRateArray[0] === contactFrequency[count][key]){  // Find Lead One In Contact
                      console.log(key);
                    }
                    count++;
                }
                // Define Lead One in Contact FINISH!
                /*          */


                /*************/
                // Month Frequency Calculation START!
                for (var key in monthCount) {
                    var obj = {}
                    obj[key] = (monthCount[key] / result.length) * 100
                    monthFrequency.push(obj);
                }
                // Month Frequency Calculation FINISH!

                /*          */
                // Define Lead One in Month START!

                count = 0;

                for (var i = 0; i < Object.keys(monthCount).length; i++) {

                    var a = (monthCount[Object.keys(monthCount)[i]] / result.length) * 100;
                    monthRateArray.push(a);
                }

                monthRateArray.sort(descendingOrder);

                for (var key in monthCount) { // Define Lead One in Month
                    if(monthRateArray[0] == monthFrequency[count][key] && monthRateArray[0] === monthFrequency[count][key]){  // Find Lead One In Month
                      console.log(key);
                    }
                    count++;
                }
                // Define Lead One in Month FINISH!
                /*          */


                /*************/
                // Day Of Week Frequency Calculation START!
                for (var key in dayOfWeekCount) {
                    var obj = {}
                    obj[key] = (dayOfWeekCount[key] / result.length) * 100
                    dayOfWeekFrequency.push(obj);
                }
                // Day Of Week Frequency Calculation FINISH!

                /*          */
                // Define Lead One in Day Of Week START!

                count = 0;

                for (var i = 0; i < Object.keys(dayOfWeekCount).length; i++) {

                    var a = (dayOfWeekCount[Object.keys(dayOfWeekCount)[i]] / result.length) * 100;
                    dayOfWeekRateArray.push(a);
                }

                dayOfWeekRateArray.sort(descendingOrder);

                for (var key in dayOfWeekCount) { // Define Lead One in Day Of Week
                    if(dayOfWeekRateArray[0] == dayOfWeekFrequency[count][key] && dayOfWeekRateArray[0] === dayOfWeekFrequency[count][key]){  // Find Lead One In Day Of Week
                      console.log(key);
                    }
                    count++;
                }
                // Define Lead One in Day Of Week FINISH!
                /*          */

                /*************/
                // PoutCome Frequency Calculation START!
                for (var key in poutcomeCount) {
                    var obj = {}
                    obj[key] = (poutcomeCount[key] / result.length) * 100
                    poutFrequency.push(obj);
                }
                // PoutCome Frequency Calculation FINISH!

                /*          */
                // Define Lead One in PoutCome START!

                count = 0;

                for (var i = 0; i < Object.keys(poutcomeCount).length; i++) {

                    var a = (poutcomeCount[Object.keys(poutcomeCount)[i]] / result.length) * 100;
                    poutComeRateArray.push(a);
                }

                poutComeRateArray.sort(descendingOrder);

                for (var key in poutcomeCount) { // Define Lead One in PoutCome
                    if(poutComeRateArray[0] == poutFrequency[count][key] && poutComeRateArray[0] === poutFrequency[count][key]){  // Find Lead One In PoutCome
                      console.log(key);
                    }
                    count++;
                }
                // Define Lead One in PoutCome FINISH!
                /*          */

                /*************/
                // Y Frequency Calculation START!
                for (var key in yCount) {
                    var obj = {}
                    obj[key] = (yCount[key] / result.length) * 100
                    yFrequency.push(obj);
                }
                // Y Frequency Calculation FINISH!

                /*          */
                // Define Lead One in Y START!

                count = 0;

                for (var i = 0; i < Object.keys(yCount).length; i++) {

                    var a = (yCount[Object.keys(yCount)[i]] / result.length) * 100;
                    yRateArray.push(a);
                }

                yRateArray.sort(descendingOrder);

                for (var key in yCount) { // Define Lead One in Y
                    if(yRateArray[0] == yFrequency[count][key] && yRateArray[0] === yFrequency[count][key]){  // Find Lead One In Y
                      console.log(key);
                    }
                    count++;
                }
                // Define Lead One in Y FINISH!
                /*          */

            }

            reader.readAsText(file);
        }
    } else {
        alert("Please change your browser, it is not compatible with File API.")
    }

}

function descendingOrder(a, b) {
    return b - a;
}
