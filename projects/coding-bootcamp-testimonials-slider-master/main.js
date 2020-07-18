const avatar = document.querySelector(".avatar")
const bioBody = document.querySelector(".body")
const slideTextArr = document.querySelectorAll(".slideText")
const author = document.querySelector(".author")
const title = document.querySelector(".title")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let currentIndex = 0

const slidesArr = [
  {
    avatar: "./images/image-tanya.jpg",
    author: "Tanya Sinclair",
    title: "UX Engineer",
    bodyDesktop: [
      "“ I’ve been interested in coding for a while",
      "but never taken the jump, until now. I",
      " couldn’t recommend this course enough.",
      " I’m now in the job of my dreams and so",
      "excited about the future. ”",
    ],
    bodyMobile: [
      "“ I’ve been interested in coding for a",
      " while but never taken the jump, until",
      " now. I couldn’t recommend this ",
      "course enough. I’m now in the job of",
      " my dreams and so excited about the ",
      "future. ”",
    ],
  },
  {
    avatar: "./images/image-john.jpg",
    author: "John Tarkpor",
    title: "Junior Front-end Developer",
    bodyDesktop: [
      "“ If you want to lay the best foundation",
      " possible I’d recommend taking this",
      "course. The depth the instructors go into ",
      "is incredible. I now feel so confident about",
      "starting up as a professional developer. ”",
    ],
    bodyMobile: [
      "“ If you want to lay the best ",
      "foundation possible I’d recommend ",
      "taking this course. The depth the ",
      " instructors go into is incredible. I",
      "  now feel so confident about starting",
      " up as a professional developer. ”",
    ],
  },
]

//preload avatars
const preloadImages = () => {
  for (slide of slidesArr) {
    const img = new Image()
    img.src = slide.avatar
    console.log(slide.avatar)
  }
}
preloadImages()

const fadeOutAnimation = () => {
  const tl = new TimelineMax({
    onComplete: () => {
      console.log("complete")
      updateDOM()
      //gsap animation
      fadeInAnimation()
    }
  })

  tl.to(avatar, { opacity: 0, duration: 0.15 })
  tl.to(".slideText", { opacity: 0, x: "-50%", duration: 0.2, delay: -0.2, stagger: 0.02, ease: "back" })
}

const fadeInAnimation = () => {
  gsap.to(avatar, { opacity: 1, duration: 0.15 })
  gsap.to(".slideText", { opacity: 1, x: "0%", duration: 0.2, stagger: 0.02, ease: "back" })
}


const updateSlide = (nextSlide = false) => {
  //update current slide index
  nextSlide ? currentIndex++ : currentIndex--
  if (currentIndex === slidesArr.length) currentIndex = 0
  if (currentIndex < 0) currentIndex = slidesArr.length - 1

  //debug slide
  // console.log("current index", currentIndex)

  //gsap animation
  fadeOutAnimation()

}

const updateDOM = () => {

  //update DOM
  avatar.setAttribute("src", `${slidesArr[currentIndex].avatar}`)
  title.innerHTML = slidesArr[currentIndex].title
  author.innerHTML = slidesArr[currentIndex].author

  //update each line of the bio
  //depending on desktop or mobile
  //detect current width
  console.log(document.body.clientWidth)
  let bioBodyArr
  if (document.body.clientWidth > 1000) {
    bioBodyArr = slidesArr[currentIndex].bodyDesktop
  } else {
    bioBodyArr = slidesArr[currentIndex].bodyMobile
  }

  slideTextArr.forEach((item, index) => {
    item.innerHTML = bioBodyArr[index] || ""
  })
}

//initialize
updateDOM()

prevBtn.addEventListener("click", updateSlide)
nextBtn.addEventListener("click", () => updateSlide(true))

//first time using resize observer
const ro = new ResizeObserver(entries => {
  // console.log(entries)
  updateDOM()
})
// observe 
ro.observe(document.body)