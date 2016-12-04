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
                    mounthCount = {
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
                        if(nonNumberAttributes[j] == "job" && nonNumberAttributes[j] === "job"){
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
                        }else if(nonNumberAttributes[j] == "marital" && nonNumberAttributes[j] === "marital"){
                          maritalCount.divorced += (result[i][nonNumberAttributes[j]] == "divorced" && result[i][nonNumberAttributes[j]] === "divorced") ? 1 : 0;
                          maritalCount.married += (result[i][nonNumberAttributes[j]] == "married" && result[i][nonNumberAttributes[j]] === "married") ? 1 : 0;
                          maritalCount.single += (result[i][nonNumberAttributes[j]] == "single" && result[i][nonNumberAttributes[j]] === "single") ? 1 : 0;
                          maritalCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        }else if(nonNumberAttributes[j] == "education" && nonNumberAttributes[j] === "education"){
                          educationCount.basic_4y += (result[i][nonNumberAttributes[j]] == "basic.4y" && result[i][nonNumberAttributes[j]] === "basic.4y") ? 1 : 0;
                          educationCount.basic_6y += (result[i][nonNumberAttributes[j]] == "basic.6y" && result[i][nonNumberAttributes[j]] === "basic.6y") ? 1 : 0;
                          educationCount.basic_9y += (result[i][nonNumberAttributes[j]] == "basic.9y" && result[i][nonNumberAttributes[j]] === "basic.9y") ? 1 : 0;
                          educationCount.high_school += (result[i][nonNumberAttributes[j]] == "high.school" && result[i][nonNumberAttributes[j]] === "high.school") ? 1 : 0;
                          educationCount.illiterate += (result[i][nonNumberAttributes[j]] == "illiterate" && result[i][nonNumberAttributes[j]] === "illiterate") ? 1 : 0;
                          educationCount.professional_course += (result[i][nonNumberAttributes[j]] == "professional.course" && result[i][nonNumberAttributes[j]] === "professional.course") ? 1 : 0;
                          educationCount.university_degree += (result[i][nonNumberAttributes[j]] == "university.degree" && result[i][nonNumberAttributes[j]] === "university.degree") ? 1 : 0;
                          educationCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        }else if(nonNumberAttributes[j] == "default" && nonNumberAttributes[j] === "default"){
                          defaultCount.no += (result[i][nonNumberAttributes[j]] == "no" && result[i][nonNumberAttributes[j]] === "no") ? 1 : 0;
                          defaultCount.yes += (result[i][nonNumberAttributes[j]] == "yes" && result[i][nonNumberAttributes[j]] === "yes") ? 1 : 0;
                          defaultCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        }else if(nonNumberAttributes[j] == "housing" && nonNumberAttributes[j] === "housing"){
                          housingCount.no += (result[i][nonNumberAttributes[j]] == "no" && result[i][nonNumberAttributes[j]] === "no") ? 1 : 0;
                          housingCount.yes += (result[i][nonNumberAttributes[j]] == "yes" && result[i][nonNumberAttributes[j]] === "yes") ? 1 : 0;
                          housingCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        }else if(nonNumberAttributes[j] == "loan" && nonNumberAttributes[j] === "loan"){
                          loanCount.no += (result[i][nonNumberAttributes[j]] == "no" && result[i][nonNumberAttributes[j]] === "no") ? 1 : 0;
                          loanCount.yes += (result[i][nonNumberAttributes[j]] == "yes" && result[i][nonNumberAttributes[j]] === "yes") ? 1 : 0;
                          loanCount.unknown += (result[i][nonNumberAttributes[j]] == "unknown" && result[i][nonNumberAttributes[j]] === "unknown") ? 1 : 0;
                        }else if(nonNumberAttributes[j] == "contact" && nonNumberAttributes[j] === "contact"){
                          contactCount.cellular += (result[i][nonNumberAttributes[j]] == "cellular" && result[i][nonNumberAttributes[j]] === "cellular") ? 1 : 0;
                          contactCount.telephone += (result[i][nonNumberAttributes[j]] == "telephone" && result[i][nonNumberAttributes[j]] === "telephone") ? 1 : 0;
                        }else if(nonNumberAttributes[j] == "month" && nonNumberAttributes[j] === "month"){
                          mounthCount.jan += (result[i][nonNumberAttributes[j]] == "jan" && result[i][nonNumberAttributes[j]] === "jan") ? 1 : 0;
                          mounthCount.feb += (result[i][nonNumberAttributes[j]] == "feb" && result[i][nonNumberAttributes[j]] === "feb") ? 1 : 0;
                          mounthCount.mar += (result[i][nonNumberAttributes[j]] == "mar" && result[i][nonNumberAttributes[j]] === "mar") ? 1 : 0;
                          mounthCount.apr += (result[i][nonNumberAttributes[j]] == "apr" && result[i][nonNumberAttributes[j]] === "apr") ? 1 : 0;
                          mounthCount.may += (result[i][nonNumberAttributes[j]] == "may" && result[i][nonNumberAttributes[j]] === "may") ? 1 : 0;
                          mounthCount.jun += (result[i][nonNumberAttributes[j]] == "jun" && result[i][nonNumberAttributes[j]] === "jun") ? 1 : 0;
                          mounthCount.jul += (result[i][nonNumberAttributes[j]] == "jul" && result[i][nonNumberAttributes[j]] === "jul") ? 1 : 0;
                          mounthCount.aug += (result[i][nonNumberAttributes[j]] == "aug" && result[i][nonNumberAttributes[j]] === "aug") ? 1 : 0;
                          mounthCount.sep += (result[i][nonNumberAttributes[j]] == "sep" && result[i][nonNumberAttributes[j]] === "sep") ? 1 : 0;
                          mounthCount.oct += (result[i][nonNumberAttributes[j]] == "oct" && result[i][nonNumberAttributes[j]] === "oct") ? 1 : 0;
                          mounthCount.nov += (result[i][nonNumberAttributes[j]] == "nov" && result[i][nonNumberAttributes[j]] === "nov") ? 1 : 0;
                          mounthCount.dec += (result[i][nonNumberAttributes[j]] == "dec" && result[i][nonNumberAttributes[j]] === "dec") ? 1 : 0;
                        }else if(nonNumberAttributes[j] == "day_of_week" && nonNumberAttributes[j] === "day_of_week"){
                          dayOfWeekCount.mon += (result[i][nonNumberAttributes[j]] == "mon" && result[i][nonNumberAttributes[j]] === "mon") ? 1 : 0;
                          dayOfWeekCount.tue += (result[i][nonNumberAttributes[j]] == "tue" && result[i][nonNumberAttributes[j]] === "tue") ? 1 : 0;
                          dayOfWeekCount.wed += (result[i][nonNumberAttributes[j]] == "wed" && result[i][nonNumberAttributes[j]] === "wed") ? 1 : 0;
                          dayOfWeekCount.thu += (result[i][nonNumberAttributes[j]] == "thu" && result[i][nonNumberAttributes[j]] === "thu") ? 1 : 0;
                          dayOfWeekCount.fri += (result[i][nonNumberAttributes[j]] == "fri" && result[i][nonNumberAttributes[j]] === "fri") ? 1 : 0;
                          dayOfWeekCount.sat += (result[i][nonNumberAttributes[j]] == "sat" && result[i][nonNumberAttributes[j]] === "sat") ? 1 : 0;
                          dayOfWeekCount.sun += (result[i][nonNumberAttributes[j]] == "sun" && result[i][nonNumberAttributes[j]] === "sun") ? 1 : 0;
                        }else if(nonNumberAttributes[j] == "poutcome" && nonNumberAttributes[j] === "poutcome"){
                          poutcomeCount.failure += (result[i][nonNumberAttributes[j]] == "failure" && result[i][nonNumberAttributes[j]] === "failure") ? 1 : 0;
                          poutcomeCount.nonexistent += (result[i][nonNumberAttributes[j]] == "nonexistent" && result[i][nonNumberAttributes[j]] === "nonexistent") ? 1 : 0;
                          poutcomeCount.success += (result[i][nonNumberAttributes[j]] == "success" && result[i][nonNumberAttributes[j]] === "success") ? 1 : 0;
                        }else if(nonNumberAttributes[j].trim() == "y" && nonNumberAttributes[j].trim() === "y"){
                          yCount.yes += (result[i][nonNumberAttributes[j]].trim() == "yes" && result[i][nonNumberAttributes[j]].trim() === "yes") ? 1 : 0;
                          yCount.no += (result[i][nonNumberAttributes[j]].trim() == "no" && result[i][nonNumberAttributes[j]].trim() === "no") ? 1 : 0;
                        }
                    }
                }

            }

            reader.readAsText(file);
        }
    } else {
        alert("Please change your browser, it is not compatible with File Reader.")
    }

}
