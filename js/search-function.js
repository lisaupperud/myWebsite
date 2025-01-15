// JavaScript for filtering skills based on search input
function filterSkills() {
    var input, filter, skillsList, skills, skill, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();  // Gör texten i sökfältet till stora bokstäver
    skillsList = document.getElementById("skillsList");
    skills = skillsList.getElementsByClassName("skill");

    // Logga för att kolla på det som skrivs i sökfältet
    console.log("Searching for: " + filter);  

    // Loop through all skills and hide those who don't match the search query
    for (i = 0; i < skills.length; i++) {
        skill = skills[i];
        title = skill.getElementsByTagName("h2")[0];

        if (title) {
            // Gör rubriken till stora bokstäver för jämförelse
            var titleText = title.innerHTML.toUpperCase();
            
            // Kontrollera om titeln innehåller det inmatade sökordet
            if (titleText.indexOf(filter) > -1) {
                skill.classList.remove("hidden");  // Visa artikeln om det finns en match
            } else {
                skill.classList.add("hidden");  // Dölja artikeln om ingen match finns
            }
        }
    }
}

