let formAdmin = document.querySelector('.admin-form')
let videoLinkInput = document.querySelector('.video-link')
let imageLinkInput = document.querySelector('.image-link')
let nameVideoInput = document.querySelector('.name-video')

formAdmin.onsubmit = (e) => {
	e.preventDefault()
	videoTitle = nameVideoInput.value
	videoimg = imageLinkInput.value
	iframeCode = videoLinkInput.value
	videoLists.push({videoTitle,videoimg, iframeCode})
	window.localStorage.setItem('lists', JSON.stringify(videoLists))
	nameVideoInput.value = null
	imageLinkInput.value = null
	videoLinkInput.value = null

}

