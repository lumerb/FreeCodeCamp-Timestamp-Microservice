const moment = require('moment');

const transformTime = (time) => {
    let timeObj = {
        "unix": null,
        "utc": null
    };
    const formats = [
        moment.ISO_8601,
        "MMMM D, YYYY"
    ]

    console.log(moment(time).unix())
    if (moment(time, formats, true).isValid()) {

        timeObj = {
            "unix": moment(time).unix(),
            "utc": new Date(time).toUTCString()
        }

    } else if (moment.unix(time).isValid()) {

        timeObj = {
            "unix": parseInt(time),
            "utc": new Date(parseInt(time)).toUTCString()
        }

    } else {

        timeObj = {
            "unix": null,
            "utc": "Invalid Date"
        }

    }

    return timeObj
}

exports.timestamp = (req, res) => {
    const time = req.params.time;

    res.json(transformTime(time))
}