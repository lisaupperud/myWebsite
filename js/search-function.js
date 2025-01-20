// sökfunktion
// filtrerar element utifrån sökord 
function filterSkills() {
    var input, filter, skillsList, skills, skill, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();  
    skillsList = document.getElementById("skillsList");
    skills = skillsList.getElementsByClassName("skill");

    // logga för att kolla på det som skrivs i sökfältet
    console.log("Searching for: " + filter);  

    // loopar genom skills och gömmer dem som ej matchar
    for (i = 0; i < skills.length; i++) {
        skill = skills[i];
        title = skill.getElementsByTagName("h2")[0];

        if (title) {
            // gör rubriken till stora bokstäver för jämförelse
            var titleText = title.innerHTML.toUpperCase();
            
            // kontrollerar om titeln innehåller sökordet
            if (titleText.indexOf(filter) > -1) {
                skill.classList.remove("hidden");  // visa om det finns en match
            } else {
                skill.classList.add("hidden");  // annars dölj 
            }
        }
    }
}

