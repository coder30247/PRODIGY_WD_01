window.onscroll = function() {
    var navigation = document.getElementById("navigation");
    if (window.pageYOffset > 0) {
      navigation.style.backgroundColor = "#555";
    } else {
      navigation.style.backgroundColor = "#333";
    }
  };
  
  document.querySelectorAll("#navigation ul li a").forEach(function(link) {
    link.addEventListener("focus", function() {
      document.querySelector("#navigation").style.backgroundColor = "#555";
    });
  });