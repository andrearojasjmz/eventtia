document.body.appendChild(document.createElement('script')).src = 'https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js';
document.body.appendChild(document.createElement('script')).src = 'https://www.gstatic.com/firebasejs/8.2.6/firebase-analytics.js';

document.write('<script>var firebaseConfig = {apiKey: "AIzaSyB0fMPfWdlaJLnSwbXlOwbfwvYom4-hpVE",authDomain: "eventtia-live-ecommerce.firebaseapp.com",projectId: "eventtia-live-ecommerce",storageBucket: "eventtia-live-ecommerce.appspot.com",messagingSenderId: "935859228641",appId: "1:935859228641:web:5149695d36358c49e44ca0",measurementId: "G-QW460LS9BK"};firebase.initializeApp(firebaseConfig);firebase.analytics();</script>');

document.body.appendChild(document.createElement('script')).src = '/__/firebase/init.jss';

var div = document.createElement("div");

var params = document.getElementById("eventtia-library").src;
if (params.indexOf('url') !== -1) {
  let count = params.indexOf('url');
  var url = params.slice(count + 4);
}

  div.innerHTML =
    '<div class="modal-embed">\n' +
    '<div class="modal-content">\n' +
    '<span class="close-btn">&times;</span>\n' +
    '<embed class="embed-modal" width="100%" height="100%" type="text/html" src="'+ url +'">\n' +
    '</div>\n'+
    '</div>\n';
  
  document.body.appendChild(div);

  var modal = document.getElementsByClassName("modal-embed")[0];
  var modalContent = document.getElementsByClassName("modal-content")[0];
  var btn = document.getElementsByClassName("eventtia-btn");
  var span = document.getElementsByClassName("close-btn");
  var embed = document.getElementsByClassName("embed-modal")[0];

  for (let i=0;i<btn.length;i++) {
    btn[i].onclick = function() {
      //gtag();
      modal.style.display = "block";
    }
  }
  
  for (let i=0;i<span.length;i++) {
    span[i].setAttribute("style", "color: #aaaaaa; float: right; margin: 10px; font-size: 28px; font-weight: bold; cursor: pointer;");
    span[i].onclick = function() {
      modal.style.display = "none";
    }
  }

  modal.setAttribute("style", "display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4); overflow: hidden");
  modalContent.setAttribute("style", "background-color: #fefefe; margin: auto; padding: 0px; border: 1px solid #888;");
  embed.setAttribute("style", "height: calc(100vh - 55px);");

  
