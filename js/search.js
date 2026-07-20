/* ============================================================
   ANIMEHUB — SEARCH SCRIPT
   ============================================================ */

function searchAnime() {
  // get what the user typed, lowercase so search isn't case-sensitive
  var input = document.getElementById("search-input").value.toLowerCase();

  // get every anime card on the page
  var cards = document.querySelectorAll(".card");

  for (var i = 0; i < cards.length; i++) {
    var title = cards[i].querySelector("h3").textContent.toLowerCase();
    var genre = cards[i].querySelector(".genre").textContent.toLowerCase();

    if (title.indexOf(input) !== -1 || genre.indexOf(input) !== -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
