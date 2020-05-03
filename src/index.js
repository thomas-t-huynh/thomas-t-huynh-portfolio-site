const projectsSection =  document.querySelector(".projects-section");
const projectCard = `
        <div class="projects-project_card">
            <h3>Project Name<hr></h3>
            <ul>
            <li>
                Project description - Info about what project does and what lesson it teaches. Significance.
            </li>
            <li>
                Projects languages/tools/skills
            </li>
            </ul>
            <div class="projects-project_card_links">
            <a href="#">
                <img src="../src/images/github-icon.png"/>
            </a>
            <a href="#">
                <img src="../src/images/link-icon.png"/>            
            </a>
        </div>
   `
for (var i = 0; i < 8; i++) {
   projectsSection.innerHTML += projectCard
}