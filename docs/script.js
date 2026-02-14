function showMainMessage() {
  const message = document.getElementById("message");
  message.classList.remove("hidden");
  message.innerHTML = `
    Aunque estemos lejos,<br><br>
    siempre encontramos la forma de estar juntos 💕<br><br>
    Películas 🎬<br>
    Jueguitos 🎮<br>
    Risas 💬<br><br>
    Siempre tú. Siempre nosotros 💖
  `;
}

function showTimeline() {
  const message = document.getElementById("message");
  message.classList.remove("hidden");
  message.innerHTML = `
    <div class="timeline">

      <h3>🌅 11 Julio 2025 — Cuando todo empezó</h3>
      <img src="primera.jpg" class="timeline-img" onclick="openModal(this)">
      <p>Aquí empezó todo. Una simple partida... y míranos ahora 💞</p>

      <h3>🏗️ Nuestro primer establo</h3>
      <img src="establo.jpg" class="timeline-img" onclick="openModal(this)">
      <p>La primera vez que construimos algo juntos 🥹</p>

      <h3>🏠 Nuestra casita en el nuevo mundo</h3>
      <img src="casita.jpg" class="timeline-img" onclick="openModal(this)">
      <p>Porque seguimos creciendo, bloque por bloque 💖</p>

      <h3>🐴 Momentos especiales</h3>
      <img src="caballo.jpg" class="timeline-img" onclick="openModal(this)">

      <h3>🪑 Días tranquilos juntos</h3>
      <img src="sillas.jpg" class="timeline-img" onclick="openModal(this)">

      <h3>🚗 Momentos cinematográficos</h3>
      <img src="carros.jpg" class="timeline-img" onclick="openModal(this)">

      <h3>🐹 Amor en todas sus formas</h3>
      <img src="hamster.jpg" class="timeline-img" onclick="openModal(this)">
      <p>Y todo esto apenas comienza 💫</p>

    </div>

    <div id="imageModal" class="modal" onclick="closeModal()">
      <img id="modalImg">
    </div>
  `;
}

function showSecret() {
  const message = document.getElementById("message");
  message.classList.remove("hidden");
  message.innerHTML = `
    💌 Mensaje secreto:<br><br>
    Gracias por elegirme incluso en los días difíciles.<br>
    Gracias por amarme incluso cuando no soy perfecta.<br><br>
    Te amo, bolita de quesito 🧀💖
  `;
}

function openModal(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modal.classList.add("active");
  modalImg.src = img.src;

  if (img.src.includes("primera.jpg")) {
    showSpecialText("Aquí empezó nuestra historia.");
  }

  if (img.src.includes("hamster.jpg")) {
    showSpecialText("Y esto apenas comienza.");
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("active");
}

function showSpecialText(textContent) {
  const modal = document.getElementById("imageModal");

  const text = document.createElement("div");
  text.className = "special-text";
  text.innerText = textContent;

  modal.appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 4000);
}
