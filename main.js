let videosList = document.querySelector('.videos-list')
let modalWindow = document.querySelector('.modal-box')
let closeButton = document.querySelector('#close-btn')
let vidoeiframe = document.querySelector('#vidoeiframe')
let img3 = document.querySelector('#img3')
let drop = document.querySelector('drop-down')


function videosRenderer(array) {
	videosList.innerHTML = null
	for (let element of array) {
		let li = document.createElement('li')
		let videoBox = document.createElement('div')
		let img1 = document.createElement('img')
		let span1 = document.createElement('span')
		let span2 = document.createElement('span')
		let videoTextBox = document.createElement('div')
		let img2 = document.createElement('img')
		let img3 = document.createElement('img')
		let title = document.createElement('p')
		let span3 = document.createElement('span')
		let drop = document.createElement('span')

		li.classList.add('videos-item')
		videoBox.classList.add('video-box')
		span1.classList.add('icon')
		span2.classList.add('icon')
		span2.classList.add('icon2')
		videoTextBox.classList.add('video-text-box')
		title.classList.add('item-title')

		img1.src = element.videoimg
		span1.innerHTML = `<img src="./img/clock.svg" alt="hello" width="15" height="15" class="new"/>`
		span2.innerHTML = `<img src="./img//history.svg" alt="hello" width="15" height="15" class="new"/>`
		title.textContent = element.videoTitle
		img2.src = './img/uzfact.jpg'
		img3.src = './img/more.svg'
		img3.classList.add('context')
		img3.style.left = "170px";
		img3.style.position = "relative";
		title.style.position = "relative";
		title.style.right = "50px";

		img3.addEventListener('click', (event) =>{
			console.log(event.clientX, event.clientY)
			const con = document.getElementById('drop')
			con.style.display = 'block'
			con.style.top = event.clientY + 'px';
			con.style.left = event.clientX + 'px';
			console.log(con)
		})
		videoBox.appendChild(img1)
		videoBox.appendChild(span1)
		videoBox.appendChild(span2)
		videoTextBox.appendChild(img2)
		videoTextBox.appendChild(img3)
		videoTextBox.appendChild(title)
		videoTextBox.appendChild(span3)
		videoTextBox.appendChild(drop)

		li.appendChild(videoBox)
		li.appendChild(videoTextBox)
		videosList.appendChild(li)

		img1.onclick = () => {
			modalWindow.classList.remove('hide')
			vidoeiframe.innerHTML = element.iframeCode
			let iframe = document.querySelector('iframe')
			let sourceCode = iframe.src
			iframe.src = sourceCode + '?autoplay=1'
			closeButton.onclick = () => {
				modalWindow.classList.add('hide')
				iframe.src = sourceCode
			}
		}
	}
}
videosRenderer(videoLists)
videoLists.innerHTML = null


navBtn.addEventListener('click', (event) => {
    navSection.classList.toggle('margin-left-minus'), videoList.classList.toggle("videos-list"), videoList.classList.toggle("padding-left");
})



let searchInput = document.getElementById('searchInput')
searchBtn.onclick = () => {
	console.log('searching')
	const list = document.querySelectorAll('.videos-item');
	console.log('working')
	for(let i = 0; i < list.length; i++){
		let vid_el = list[i].querySelector('.video-text-box .item-title').textContent.toLowerCase();
		console.log(vid_el)
		if ( vid_el.indexOf(searchInput.value.toLowerCase()) > -1 ) {
			list[i].querySelector('.video-text-box').style.display = ''
		} else {
			list[i].style.display = 'none'
		}
		
	}
}



document.addEventListener('click',(event) => {
	const con = document.getElementById('drop')
	if (event.target.className.indexOf('context') == -1) {
		con.style.display ='none'
	}

})



function voice(){
	let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	let SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
	let SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


    

  
    let recognition = new SpeechRecognition();
    let speechRecognitionList = new SpeechGrammarList();
    recognition.grammars = speechRecognitionList;
    recognition.lang = 'en-EN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;
  
    recognition.start();
	
	
	recognition.onresult = function(event) {
	  	let query = event.results[0][0].transcript;
	  	searchInput.value = query;
	  	searchBtn.click()
		
	}
};







