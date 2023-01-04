const validateData = (schema) => {
  let response = {data: {}, message: '', validated: true}
  for (const key in schema) {
    if(schema[key].require){
      if(!schema[key].value) {
        response = {...response, message: `${key} can't be empty`, validated: false}
        break;
      }
    }
    if(key === 'date') {
      if(schema[key].value < schema[key].min || schema[key].value > schema[key].max) {
        response = {...response, message: `${key} must be more than ${schema[key].min} and less than ${schema[key].max}`, validated: false}
        break;
      }  
    } else {
      if((schema[key].value.length > 0 && schema[key].value.length < schema[key].min) || schema[key].value.length > schema[key].max) {
        response = {...response, message: `${key} must be more than ${schema[key].min} and less than ${schema[key].max}`, validated: false}
        break;
      }
    }
  }
  for (const key in schema) {
    response.data[key] = schema[key].value
  }
  return response
}
export default validateData