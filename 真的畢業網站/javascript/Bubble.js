const bubbleContainer = document.getElementById("bubble");
for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");
    const speed = Math.floor(Math.random() * 60 + 10); // 10~50
    const left = Math.random() * 200-100; // 百分比
    span.style.setProperty("--i", speed);
    span.style.left = `${left}%`;
    bubbleContainer.appendChild(span);
}