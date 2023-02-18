import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GenFunctionsService {

    constructor() { }
    getFileFromBase64(string64:string, fileName:string) {
        const trimmedString = string64.replace('data:image/png;base64,', '');
        
        const imageContent = atob(trimmedString);
        const buffer = new ArrayBuffer(imageContent.length);
        const view = new Uint8Array(buffer);
      
        for (let n = 0; n < imageContent.length; n++) {
          view[n] = imageContent.charCodeAt(n);
        }
        const type = 'image/png';
        const blob = new Blob([buffer], { type });
        return new File([blob], fileName, { lastModified: new Date().getTime(), type });
	}
	
	toBase64 = (file: Blob) => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});


    imagetobg(){
		this.findElementAndAddClassToParent('.bg-top', 'b-top');
		this.findElementAndAddClassToParent('.bg-bottom', 'b-bottom');
		this.findElementAndAddClassToParent('.bg-center', 'b-center');
		this.findElementAndAddClassToParent('.bg-left', 'b-left');
		this.findElementAndAddClassToParent('.bg-right', 'b-right');
		this.findElementAndAddClassToParent('.bg_size_content', 'b_size_content');
		this.findElementAndAddClassToParent('.bg-img', 'bg-size');
		this.findElementAndAddClassToParent(':scope .bg-img .blur-up', 'blur-up lazyload');

		const el = document.querySelectorAll('.bg-img');
		el.forEach((element) => {
			let prStyle = element.parentElement?.style;
			prStyle?.setProperty('background-image', 'url(' + element.getAttribute('src') + ')');
			prStyle?.setProperty('background-size', 'cover')
			prStyle?.setProperty('background-position', 'center')
			prStyle?.setProperty('background-repeat', 'no-repeat')
			prStyle?.setProperty('display', 'block')
			element.setAttribute('hidden', '');
		});
        
	}
	
	findElementAndAddClassToParent(elementSelector: string, className: string){
		const el = document.querySelectorAll(elementSelector);
		el.forEach((element) => {
			element.parentElement?.classList.add(className);
		});
	}

	displayOverlay(){
		document.querySelector(".loading-text")?.setAttribute("style", "display:flex;");
	}
	removeOverlay(){
		document.querySelector(".loading-text")?.setAttribute("style", "display:none;");
	}

	alpha2num(letter:string){
		return ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].indexOf(letter.slice(0,1).toUpperCase());
	}

	closeModal(selector:string){
		document.querySelector<HTMLElement>(selector)?.style.setProperty("display", "none");
		document.querySelector<HTMLElement>(selector)?.classList.remove("show");
		document.querySelector<HTMLElement>("#backdrop")?.style.setProperty("display", "none");
		document.querySelector<HTMLElement>(".modal-backdrop")?.remove();
		document.querySelector<HTMLElement>('body')?.classList.remove('modal-open');
		document.querySelector<HTMLElement>('body')?.style.setProperty("overflow", "auto");
	}


	shuffleArray(array:[]) {
		let currentIndex = array.length,  randomIndex;
	  
		// While there remain elements to shuffle.
		while (currentIndex != 0) {
	  
		  // Pick a remaining element.
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex--;
	  
		  // And swap it with the current element.
		  [array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	}
}
