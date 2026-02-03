const messages = [
    "Are you sure?",
    "Think again 😌",
    "Really sure??",
    "pakka beautiful?",
    "beautiful please...",
    "Just think about it!",
    "Don’t say no, I’d be pretty sad.",
    "I’d be really sad.",
    "I’d be extremely sad.",
    "Okay, I won’t ask anymore.",
    "Haha, kidding! Please say yes 😉"
];

let index = 0;
let emailSent = false;

function handleNo() {
    const noBtn = document.querySelector(".no-button");
    const yesBtn = document.querySelector(".yes-button");

    noBtn.textContent = messages[index];

    // grow YES button safely
    const size = parseFloat(getComputedStyle(yesBtn).fontSize);
    if (size < 60) {
        yesBtn.style.fontSize = size * 1.25 + "px";
    }

    index++;
}

function handleYes() {
    const noBtn = document.querySelector(".no-button");

    // Block YES at "Are you sure?"
    if (noBtn.textContent === "Are you sure?") {
        noBtn.textContent = "Think again 😌";
        index = 2;
        return;
    }

    // Valid YES
    if (index > 1 && !emailSent) {
        emailSent = true;

        emailjs.send(
            "service_da0sod7",
            "template_z7py7mg",
            {
                message: "She clicked YES 💖",
                time: new Date().toLocaleString()
            }
        ).finally(() => {
            window.location.href = "yes_page.html";
        });
    }
}
