
var button = document.createElement("button");
button.setAttribute("class", "modal-btn");
button.innerText = "Open Modal";
document.body.appendChild(button);

var div = document.createElement("div");

  div.innerHTML =
    '<div class="modal-embed">\n' +
    '<div class="modal-content">\n' +
    '<span class="close-btn">&times;</span>\n' +
    '<embed class="embed-modal" width="100%" height="100%" type="text/html" src="https://virtual-stage.eventtia.com/fr/toys/stage/122044">\n' +
    '</div>\n'+
    '</div>\n';
  
  document.body.appendChild(div);

  var modal = document.getElementsByClassName("modal-embed")[0];
  var modalContent = document.getElementsByClassName("modal-content")[0];
  var btn = document.getElementsByClassName("modal-btn")[0];
  var span = document.getElementsByClassName("close-btn")[0];
  var embed = document.getElementsByClassName("embed-modal")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  };
  
  span.onclick = function() {
    modal.style.display = "none";
  };

  modal.setAttribute("style", "display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);");
  span.setAttribute("style", "color: #aaaaaa; float: right; margin: 10px; font-size: 28px; font-weight: bold; cursor: pointer;");
  modalContent.setAttribute("style", "background-color: #fefefe; margin: auto; padding: 0px; border: 1px solid #888;");
  embed.setAttribute("style", "height: calc(100vh - 55px);");
