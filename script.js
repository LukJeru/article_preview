const share = document.getElementById("speechBubble")

function popup(event) {
  share.style.display = "block";
}

document.getElementById("share").addEventListener("click", popup)
