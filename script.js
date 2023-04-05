const OpenNav = document.querySelector(".icon1")
const FermerNav = document.querySelector(".fermer")
const Menu = document.querySelector(".menu")

const PositionMenu = Menu.getBoundingClientRect().left;

OpenNav.addEventListener("click", () =>{	
	if	(PositionMenu <0){
		Menu.classList.add("monter")
	}
})


FermerNav.addEventListener("click", () =>{
	if(PositionMenu <0){
		Menu.classList.remove("monter")
	}
})


const navigation = document.querySelector('navigation');
window.addEventListener('scroll', () => {

	if(window.scrollY > 10){
 		navigation.classList.add('anim-nav');
	} else {
		navigation.classList.remove('anim-nav');
	}

})

