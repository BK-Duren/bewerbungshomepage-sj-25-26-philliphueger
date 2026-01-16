
function copyEmail() {
    const email = "deinemail@example.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("E-Mail kopiert: " + email);
    });
}
