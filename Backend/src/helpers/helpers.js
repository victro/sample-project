// get error number
const getErrorNumber = (error) => error.code === 11000 ? 409 : 422;

/*
 * Function used to return an error when
 * some parameter is wrong or missing in the request
 */
const missingParamsError = (response, err) => {
    const errorNumber = getErrorNumber(err);
    response.status(errorNumber).json({
        success: false,
        error: err.message
    });
}

module.exports = {
    missingParamsError
};