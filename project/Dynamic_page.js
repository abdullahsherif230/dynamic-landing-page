// This loop creates navigation links for each section dynamically based on its data-nav attribute
const navBar = document.getElementById("navbar");
const BuildSections = document.querySelectorAll(".section");

// Loop through all sections to create navigation items
BuildSections.forEach(Buildsection => {
    const sectionName = Buildsection.getAttribute("data-nav");
    const ID = Buildsection.id;

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#`;
    a.textContent = sectionName;
    a.className = ID;

    li.appendChild(a);
    navBar.appendChild(li);
});

// When a nav link is clicked, scroll smoothly to the corresponding section

const sections = document.querySelectorAll("nav a");

sections.forEach(section => {
    section.addEventListener("click", function (e) {
        e.preventDefault();

        const targetClass = section.className;
        const targetSection = document.getElementById(targetClass);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// While scrolling, detect which section is currently visible and highlight it by adding 'active' class
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const Top = rect.top;
        const Bottom = rect.bottom;

        if (Top <= 200 && Bottom >= 150) {
            section.classList.add("active");
        }
        else {
            section.classList.remove("active");
        }
    });
});

// On form submit, validate inputs and display the comment below if all fields are filled correctly
const commentForm = document.querySelector("#commentForm");

commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("Email").value.trim();
    const comment = document.getElementById("comment").value.trim();
    const commentSection = document.getElementById("commentList");

    // Validate form fields
    if (name === "" || email === "" || comment === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Validate email format
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Add the comment to the comments section
    commentSection.innerHTML += `
        <fieldset class="comment">
            <p>${comment}</p>
            <p><strong>${name}</strong></p>
            <p><em>${email}</em></p>
        </fieldset>
    `;

    // Clear the form fields
    commentForm.reset();
});
