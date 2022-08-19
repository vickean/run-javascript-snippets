/* 
WhatsApp Web Blur Tool

Intended to blur contact and last message preview. 
This was intended for use for cases where you need to share your WhatsApp Web tab during a video call.

v2022_08_19
*/

// polls for message preview div class and blurs all of them
let msgPreview = setInterval(() => {
    const divs = document.getElementsByClassName("Hy9nV")
	if (divs.length > 0) {
	    for(let i = 0; i < divs.length; i++){
            divs[i].style.filter = "blur(5px)"
        }
		clearInterval(msgPreview)
	}
}, 1000)

// polls for contact name div class and blurs all of them
let cntName = setInterval(() => {
    const divs = document.getElementsByClassName("zoWT4")
	if (divs.length > 0) {
	    for(let i = 0; i < divs.length; i++){
            divs[i].style.filter = "blur(5px)"
        }
		clearInterval(cntName)
	}
}, 1000)
