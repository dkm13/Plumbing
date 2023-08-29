function reChange(iconID) {
  if (document.getElementById(iconID).className == "fas fa-times") {
    document.getElementById(iconID).className = "fas fa-bars";
  } else {
    document.getElementById(iconID).className = "fas fa-times";
  }
}
