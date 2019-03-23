module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  } 
  var bracket = [];
  for(var i = 0; i < bracketsConfig.length; i++) {
    bracket[i] = bracketsConfig[i][0] + bracketsConfig[i][1];  
  }
  var newstr = '';
  while (str != newstr) {
    newstr = str;
    for (i = 0; i < bracket.length; i++) {
      str = str.replace(bracket[i], '');
    }
  }
  return str.length === 0 ? true : false;
}

