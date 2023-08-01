function sortear() {
    const resultElement = document.getElementById("result");
    const numeros = [1, 2, 3, 4];
  
    // Gerar um número aleatório entre 0 e 3
    const indiceSorteado = Math.floor(Math.random() * numeros.length);
  
    // Animação de saída do resultado atual
    resultElement.style.animation = "flipOutX 0.5s";
  
    setTimeout(() => {
      // Atualizar o resultado
      resultElement.textContent = numeros[indiceSorteado];
  
      // Animação de entrada do novo resultado
      resultElement.style.animation = "flipInX 0.5s";
    }, 500);
  }
  