const { UrlModel } = require("../../models/urlShort");

const allUrl = async (req, res) => {
    try {
         let data =  await UrlModel.find()
        res.json({
            message: "Url send successfull",
            statusCode: 200,
            data:data.reverse()
        });
    } catch (error) {
        res.json({
            error,
            message: "Url send failed",
            statusCode: 500,
        });
    }
};

module.exports = { allUrl };

