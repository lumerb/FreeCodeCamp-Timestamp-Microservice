const moment = require("moment");

const transformTime = time => {
  let timeObj = {
    unix: null,
    utc: null
  };

  const formats = [moment.ISO_8601, "MMMM D, YYYY"];

  //check if it is a valid date based on ISO_8601

  if (moment(time, formats, true).isValid()) {
    timeObj = {
      unix: moment(time).unix() * 1000,
      utc: new Date(time).toUTCString()
    };
  } else if (moment.unix(time).isValid()) {
    timeObj = {
      unix: parseInt(time),
      utc: new Date(parseInt(time)).toUTCString()
    };
  } else if (time === "empty") {
    timeObj = {
      unix: moment().unix() * 1000,
      utc: new Date().toUTCString()
    };
  } else {
    timeObj = {
      error: "Invalid Date"
    };
  }

  return timeObj;
};

exports.timestamp = (req, res) => {
  const time = req.params.time;
  res.json(transformTime(time));
};
exports.datenow = (req, res) => {
  res.json(transformTime("empty"));
};
