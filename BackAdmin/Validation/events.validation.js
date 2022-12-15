const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateEvent(data) {
  let errors = {};
  data.EventName = !isEmpty(data.EventName) ? data.EventName : "";
  data.Organisateur = !isEmpty(data.Organisateur) ? data.Organisateur : "";
  data.Date = !isEmpty(data.Date) ? data.Date : "";
  data.Description = !isEmpty(data.Description) ? data.Description : "";
  data.Image = !isEmpty(data.Image) ? data.Image : "";
 
 
  if (validator.isEmpty(data.EventName)) {
    errors.EventName = "Required EventName";
  }
  if (validator.isEmpty(data.Organisateur)) {
    errors.Organisateur = "Required Organisateur";
  }
  if (validator.isEmpty(data.Date)) {
    errors.Date = "Required Date";
  }
  if (validator.isEmpty(data.Description)) {
    errors.Description = "Required Description";
  }
  if (validator.isEmpty(data.Image)) {
    errors.Image = "Required Image";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
};