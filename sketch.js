let fundoWin11; // Declara uma variável para armazenar a imagem

function preload() {
  // O caminho da imagem aponta para a pasta 'assets' que criaremos no próximo passo.
  // Certifique-se que o nome do arquivo da imagem esteja EXATAMENTE correto,
  // incluindo os espaços e a extensão.
  fundoWin11 = loadImage('FUNDO WIN 11 WWP .png');
}

function setup() {
  // Cria uma tela com as mesmas dimensões da imagem carregada
  createCanvas(fundoWin11.width, fundoWin11.height);
}

function draw() {
  // Desenha a imagem nas coordenadas (0,0), preenchendo toda a tela
  image(fundoWin11, 0, 0);

  // --- Agora, vamos aplicar um filtro! ---
  // Descomente APENAS UMA das linhas de 'filter()' abaixo para ver o efeito.
  // Comente as outras antes de testar uma nova.

  // 1. Tons de Cinza (Grayscale)
  // filter(GRAY);

  // 2. Inverter Cores
  // filter(INVERT);

  // 3. Pixelar a Imagem (quanto maior o número, mais pixelado)
  // filter(PIXELATE, 5); // Experimente 10, 20...

  // 4. Desfoque (o segundo argumento é a intensidade do desfoque)
  // filter(BLUR, 3); // Experimente 1, 5...

  // 5. Posterização (reduz o número de cores)
  // filter(POSTERIZE, 3); // Experimente 2, 4, 8...

  // 6. Limiar (converte para preto e branco com base em um ponto de corte entre 0 e 1)
  // filter(THRESHOLD, 0.5); // Experimente 0.2 (mais preto) ou 0.8 (mais branco)
}
