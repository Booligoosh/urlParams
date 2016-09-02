      var params = window.location.search.split('&');
      params[0] = params[0].slice(1, params[0].length);
      var urlParams = {}
      for (var loop = 0; loop < params.length; loop++) {
        var cur = params[loop].split('');
        for (var i = 0; i < cur.length; i++) {
          if (cur[i] === '%') {
            var hexString = cur[i + 1] + cur[i + 2];
            cur.splice(i, 3, String.fromCharCode(parseInt('0x' + hexString)))
          }
          if (cur[i] === '+') {
            cur[i] = ' ';
          }
        }
        cur = cur.join('').split('=');
        var k = cur[0];
        urlParams[k] = cur[1];
      }
      if (params[2] != "on") {
        var icon = params[2];
      }
