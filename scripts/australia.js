module.exports = function(robot) {

  function flipString(stringToFlip) {
    var flipTable = {
      a : '\u0250', 
      b : 'q', 
      c : '\u0254', 
      d : 'p', 
      e : '\u01DD', 
      f : '\u025F', 
      g : '\u0183', 
      h : '\u0265', 
      i : '\u0131', 
      j : '\u027E', 
      k : '\u029E', 
      l : '\u05DF', 
      m : '\u026F', 
      n : 'u', 
      p : 'd', 
      q : 'b', 
      r : '\u0279', 
      t : '\u0287', 
      u : 'n', 
      v : '\u028C', 
      w : '\u028D', 
      y : '\u028E', 
      '.' : '\u02D9', 
      '[' : ']', 
      '(' : ')', 
      '{' : '}', 
      ']' : '[', 
      ')' : '(', 
      '}' : '{', 
      '?' : '\u00BF', 
      '!' : '\u00A1', 
      "\'" : ',', 
      '<' : '>', 
      '>' : '<', 
      '_' : '\u203E', 
      '\\' : '\\', 
      ';' : '\u061B', 
      '\u203F' : '\u2040', 
      '\u2045' : '\u2046', 
      '\u2234' : '\u2235' 
    };
    stringToFlip = stringToFlip.toLowerCase();

    var last = stringToFlip.length - 1;
    var result = new Array(stringToFlip.length);

    for (var i=last; i<=0; --i) {
      var c = stringToFlip.charAt(i);
      var r = flipTable[c];
      result[last-i] = (r != undefined ? r : c);
    }
    return result.join('');
  }

  robot.respond(/australia me (.*)/i, function(msg) {
    msg.send(flipString(msg.match[1]));
  });

};