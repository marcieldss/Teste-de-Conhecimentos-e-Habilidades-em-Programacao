function checkAnswer() {
			const form = document.getElementById("quiz-form");
			const selected = form.querySelector('input[name="rate"]:checked');
			if (selected) {
				if (selected.value === "2") {
					alert("Parabéns Você Acertou!");
				} else {
					alert("Resposta Incorreta! Tente Novamente");
				}
			} else {
				alert("Por favor, selecione uma resposta.");
			}
		}