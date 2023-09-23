function saveSvgAsFile(svgLink, filename) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', svgLink, true);
    xhr.responseType = 'blob';
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        var blob = xhr.response;
        var url = window.URL.createObjectURL(blob);
  
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
  
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        console.log('Error saving SVG file:', xhr.statusText);
      }
    };
  
    xhr.send();
  }

  saveSvgAsFile('https://example.com/svg.svg', 'my-svg.svg');
