//==== Script pour récupér les données du formulaire de contact ======
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le rechargement de la page

    // Récupération des valeurs
    const name    = this.name.value;
    const phone   = this.phone.value;
    const email   = this.email.value;
    const subject = this.subject.value;
    const message = this.Message.value;

    console.log("Nom :", name);
    console.log("Téléphone :", phone);
    console.log("Email :", email);
    console.log("Sujet :", subject);
    console.log("Message :", message);

    alert("Message envoyé !");
});

//========================= Menu Mobile =============================
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
        var dropdowns = document.getElementsByClassName("contenu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
