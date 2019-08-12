	const botoes = document.querySelectorAll(".numbers button");
	const operadores = document.querySelectorAll(".operators button");
	const screen = document.querySelector(".screen");

	function show(a){
		console.log(a);
	}

	for(let x=0; x<botoes.length; x++){
		botoes[x].onclick = (e) => show(e.target.innerText);
	}
