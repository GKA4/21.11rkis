class Validator {
	isString(str){
	  return(typeof str === 'string');
	}
	isEmail(str) {
    return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
  	}
  	isDomain(str) {
    return ((str.indexOf('.com') !== -1) || (str.indexOf('.ru') !== -1))
  	}
  	isNumber(str){
	  return(typeof str === 'number');
	}
}

let validator = new Validator();

let res = validator.isString('38')
console.log(res)
res = validator.isEmail('lol@lol.aa')
console.log(res)
res = validator.isDomain('lol.com')
console.log(res)
res = validator.isNumber(38)
console.log(res)