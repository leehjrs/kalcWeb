	const botoes = document.querySelectorAll(".numbers button");
	const operadores = document.querySelectorAll(".operators button");
	const clr = document.querySelector(".numbers #clr")
	const igualdade = document.querySelector(".numbers #igual")
	const screen = document.querySelector('.screen');
	let resul;

	function show(a){
		console.log(a);
		if(a == "."){
			screen.innerText = "";
		} else {
			screen.innerText += a;
		}
	}


	for(let x=0; x<botoes.length; x++){
		botoes[x].onclick = (e) => show(e.target.innerText);
	}

	for(let x=0; x<operadores.length; x++){
			operadores[x].onclick = (e) => show(e.target.innerText);
	};


	//igualdade.onclick = (e) => botIgual();

	function botIgual(){
		console.log(resul);
   		screen.innerText = resul;
	}

	function operacoes(oper, valor1, valor2){
				switch(oper){
				case '+': 
					resul = parseFloat(valor1) + parseFloat(valor2);
					break;
				case '-':
					resul = parseFloat(valor1) - parseFloat(valor2);
					break;
				case 'X':
					resul = parseFloat(valor1) * parseFloat(valor2);
					break;
				case '÷':
					resul = parseFloat(valor1) / parseFloat(valor2);
					break;
				}			
		}


	clr.onclick = (e) => delet();

	function delet(){
   		screen.innerText = "";
	}	




	

	









