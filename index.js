const { numberString } = require("./numberString");

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }
  if (time === "12:00") {
    return "midday";
  }

  let hour = time.split(":")[0];
  let minutes = time.split(":")[1];

  if (minutes === "00") {
    hour = numberString[hour];
    return `${hour} o' clock`;
  }

  if (Number(minutes) <= 30) {
    minutes = numberString[minutes];
    hour = numberString[hour];
    return `${minutes} past ${hour}`;
  }

  if (Number(minutes) > 30) {
    minutes = numberString[60 - minutes];
    hour = numberString[Number(hour) + 1];
    return `${minutes} to ${hour}`;
  }
}

module.exports = { convertTimeToWords };
