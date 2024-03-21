// hiding links on scroll and showing link when scroll to top
const links = document.querySelector('.links').querySelectorAll('a')

document.addEventListener('scroll', () => {
	hideLinks()
})

const hideLinks = () => {
	if (window.scrollY === 0) {
		links.forEach(el => {
			el.style.opacity = '1'
		})
	} else {
		links.forEach(el => {
			el.style.opacity = 0
		})
	}
}

//showing video popup
const playIcon = document.querySelector('.play-icon')
const popup = document.querySelector('.popup')

playIcon.addEventListener('click', () => {
	showVideo()
})

const showVideo = () => {
	popup.classList.add('active')
	const iframe = document.createElement('iframe')
	const popupBody = popup.querySelector('.popup-body')
	iframe.setAttribute('src', 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1')
	popupBody.prepend(iframe)
}

//hiding video popup
const closePopupBtn = document.querySelector('.close-popup')
closePopupBtn.addEventListener('click', () => {
	hideVideo()
})

const hideVideo = () => {
	const iframe = document.querySelector('iframe')
	iframe.remove()
	popup.classList.remove('active')
}

//hiding video popup on clicking outside popup-body
popup.addEventListener('click', e => {
	if (e.target.classList.value !== 'popup-body') hideVideo()
})

const swiper = new Swiper('.mySwiper', {
	slidesPerView: 'auto',
	spaceBetween: 15,
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
})

//setting inline width for sliders
const slides = document.querySelectorAll('.swiper-slide')

const setSlidesWidth = () => {
	let screnWidth = window.innerWidth
	if (screnWidth <= 600) {
		slides.forEach(el => {
			el.style.width = '300px'
		})
	} else if (screnWidth > 600 && screnWidth <= 1000) {
		slides.forEach(el => {
			el.style.width = '400px'
		})
	} else {
		slides.forEach(el => {
			el.style.width = '500px'
		})
	}
}

setSlidesWidth()

window.onresize = setSlidesWidth
