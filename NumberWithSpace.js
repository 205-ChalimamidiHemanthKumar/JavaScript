function numberWithSpaces(value, pattern) {
  var i = 0,
  phone = value.toString();
  return pattern.replace(/#/g, _ => phone[i++]);

}
console.log(numberWithSpaces('+916305050027', '=91 6305050027'));