function setup() {
    createCanvas(400, 400); // Cria um canvas de 400x400 pixels
    background(220); // Define o fundo cinza claro
}

function draw() {
    // Não é necessário implementar nada aqui para este projeto
}

function mouseClicked() {
    let circleSize = random(20, 80); // Tamanho aleatório do círculo
    let circleColor = color(random(255), random(255), random(255)); // Cor aleatória

    fill(circleColor); // Define a cor de preenchimento para o círculo
    noStroke(); // Remove o contorno do círculo

    // Desenha um círculo na posição do clique do mouse
    ellipse(mouseX, mouseY, circleSize, circleSize);
}
