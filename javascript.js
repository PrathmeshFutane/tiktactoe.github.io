let sign = "x";

let heading = document.getElementById('heading');


const printx = (num) => {
	let store = document.getElementById('r'+num);
	console.log(store);
	if(store.innerHTML == ""){
		store.innerText = sign;
		winner();
		checksign();
		heading.innerHTML = "It's "+ sign + " turn";
		
	}
}

const checksign = () =>{
	if(sign=="x"){
		sign = "o";
	}
	else{
		sign = "x";
	}
}

const getbox = (num) =>{
	return document.getElementById('r'+num).innerText;
}

const checkmove = (a,b,c,m) =>{
	if(getbox(a)==m && getbox(b)==m && getbox(c)==m) return true;
	else false;
}

const winner = () =>{
	if(checkmove(1,2,3,sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign)
		|| checkmove(1,4,7,sign) || checkmove(2,5,8,sign) || checkmove(3,6,9,sign) 
		|| checkmove(1,5,9,sign) || checkmove(3,5,7,sign)){
		heading.innerText = `bhai ${sign} jeet gaya`;
		for(let i=1; i<=9; i++){
			document.getElementById("r"+i).innerHTML="";
		}
		throw "end game";
	}

	else{
		
		
			heading.innerText = "best of luck to both";	
		
	}
}