const rules = {
	piedra: ["tijera", "lagarto"],
	papel: ["piedra", "spock"],
	tijera: ["papel", "lagarto"],
	lagarto: ["papel", "spock"],
	spock: ["piedra", "tijera"]
};

// Función principal de juego
function play(userChoice) {
	const aiChoice = getAIChoice();
	displayChoices(userChoice, aiChoice);
	const result = determineWinner(userChoice, aiChoice);
	displayResult(result);
}

// Obtiene la elección aleatoria de la IA
function getAIChoice() {
	const choices = Object.keys(rules);
	return choices[Math.floor(Math.random() * choices.length)];
}

// Muestra las elecciones del usuario y la IA en el HTML
function displayChoices(userChoice, aiChoice) {
	document.getElementById('user-choice').innerHTML = `Tu elección: <span class="${userChoice}">${userChoice}</span>`;
	document.getElementById('ai-choice').innerHTML = `Elección de la IA: <span class="${aiChoice}">${aiChoice}</span>`;
}

// Determina el resultado entre la elección del usuario y la IA
function determineWinner(userChoice, aiChoice) {
	if (userChoice === aiChoice) {
		return 'tie'; // Empate
	} else if (rules[userChoice].includes(aiChoice)) {
		return 'win'; // Victoria
	} else {
		return 'lose'; // Derrota
	}
}

// Muestra el resultado en el HTML
function displayResult(result) {
	const resultText = document.getElementById('winner');
	resultText.textContent = result === 'tie' ? "Empate" : result === 'win' ? "Victoria" : "Derrota";
	resultText.classList.remove('winner', 'loser', 'tie');

	if (result === 'tie') {
		resultText.classList.add('tie');
	} else if (result === 'win') {
		resultText.classList.add('winner');
	} else {
		resultText.classList.add('loser');
	}
}
