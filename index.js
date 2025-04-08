const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

if (bar) {
    bar.addEventListener("click", () => {
        menu.classList.toggle("active");
    })
}

const sortBtns = document.querySelectorAll(".job-id > *")
const sortItems = document.querySelectorAll(".jog-container > *")

sortBtns.forEach((btn) => {
    btn.addEventListener('click', () =>{
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active")


        // sort job data items

        const targetData = btn.getAttribute("data-target");

        sortItems.forEach((item) => {
            item.classList.add("delete");
            if(item.getAttribute("data-item") === targetData || targetData === "all"){
                item.classList.remove("delete");
            }
        });


    });
});

{/* <script> */}
//   // Show form on "Contact" link click
//   document.getElementById('contactLink').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.getElementById('contactFormContainer').style.display = 'block';
//   });

//   // Handle form submission
//   document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const formData = new FormData(this);
//     const data = Object.fromEntries(formData.entries());
//     console.log('Submitted data:', data);

//     // Hide the form
//     document.getElementById('contactFormContainer').style.display = 'none';

//     // Show success message temporarily (optional)
//     alert('Thank you! Your message has been sent.');
//   });
// </script>


