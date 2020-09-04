const shareBtn = document.querySelector(".shareBtn")
const shareContainer = document.querySelector(".shareContainer")

shareBtn.addEventListener("click", toggleShare)


function toggleShare() {
  shareBtn.classList.toggle("shareBtnActive")
  shareContainer.classList.toggle("shareContainerActive")
}