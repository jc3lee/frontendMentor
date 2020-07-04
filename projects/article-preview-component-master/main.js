const shareCard = document.getElementById("shareCard")
const shareToggleBtn = document.getElementById("shareToggleBtn")
const mySVGPath = document.getElementById("myPathID")

const showShare = () => {
  shareCard.classList.add("showcardFooterFront")
  shareToggleBtn.classList.add("shareDark")
  mySVGPath.classList.add("myPathLight")
}
const hideShare = () => {
  shareCard.classList.remove("showcardFooterFront")
  shareToggleBtn.classList.remove("shareDark")
  mySVGPath.classList.remove("myPathLight")
}

const toggleShare = e => {
  e.stopPropagation()
  if (shareCard.classList.contains("showcardFooterFront")) {
    hideShare()
  } else {
    showShare()
  }
}

const hideShareIfOpened = () => {
  if (shareCard.classList.contains("showcardFooterFront")) {
    hideShare()
  }
}

shareToggleBtn.addEventListener("click", toggleShare)

document.addEventListener("click", hideShareIfOpened)

