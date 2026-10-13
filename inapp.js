// 앱 WebView에서 ?inapp=1 로 열면 상단 메뉴를 숨긴다. 링크를 따라가도 유지된다.
(function () {
  var q = location.search;
  if (/[?&]inapp=1\b/.test(q)) {
    document.body.classList.add('inapp');
    var links = document.querySelectorAll('a[href^="./"]');
    for (var i = 0; i < links.length; i++) {
      var h = links[i].getAttribute('href');
      var hash = '';
      var idx = h.indexOf('#');
      if (idx >= 0) { hash = h.slice(idx); h = h.slice(0, idx); }
      links[i].setAttribute('href', h + (h.indexOf('?') >= 0 ? '&' : '?') + 'inapp=1' + hash);
    }
  }
})();
