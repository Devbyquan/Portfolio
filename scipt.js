document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Typewriter Animation for Hero Section
    const words = ["Scalable Web Apps.", "High Performance UIs.", "Modern Web Experiences."];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                document.getElementById('typewriter').innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 100);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                document.getElementById('typewriter').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 60);
        };
        loopDeleting();
    }

    typingEffect();

    // 2. Interactive Portfolio Project Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active status from other buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                    setTimeout(() => { card.style.opacity = "1"; }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.display = "none";
                }
            });
        });
    });
 
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

    // 3. Hamburger Menu Toggle (mobile navigation)
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navLinks = document.getElementById("navLinks");
    const navOverlay = document.getElementById("navOverlay");

    function openMenu() {
        navLinks.classList.add("active");
        hamburgerBtn.classList.add("active");
        navOverlay.classList.add("active");
        hamburgerBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        navLinks.classList.remove("active");
        hamburgerBtn.classList.remove("active");
        navOverlay.classList.remove("active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    if (hamburgerBtn && navLinks && navOverlay) {
        hamburgerBtn.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        navOverlay.addEventListener("click", closeMenu);

        // Close the menu whenever a nav link is tapped
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Close on resize back to desktop width
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }

});
const icons=document.querySelectorAll(".floating-icons i");

icons.forEach(icon=>{

setInterval(()=>{

const x=Math.random()*40-20;
const y=Math.random()*40-20;

icon.style.transform=`translate(${x}px,${y}px)`;

},2500);

});
const image=document.querySelector(".hero-image-wrapper");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/35;
const y=(window.innerHeight/2-e.pageY)/35;

image.style.transform=`translate(${x}px,${y}px)`;

});
const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});
const hero=document.querySelector(".hero-image-wrapper");

hero.addEventListener("mousemove",(e)=>{

const rect=hero.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;
const rotateX=(rect.height/2-y)/18;

hero.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)`;

});

hero.addEventListener("mouseleave",()=>{

hero.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});
for(let i=0;i<40;i++){

const dot=document.createElement("span");

dot.classList.add("particle");

dot.style.left=Math.random()*100+"vw";
dot.style.top=Math.random()*100+"vh";
dot.style.animationDuration=5+Math.random()*8+"s";

document.body.appendChild(dot);

}
const testimonials=document.querySelectorAll(".testimonial");

let current=0;

function showTestimonials(){

testimonials.forEach(item=>{

item.classList.remove("active");

});

current++;

if(current>=testimonials.length){

current=0;

}

testimonials[current].classList.add("active");

}

setInterval(showTestimonials,4000);
/* ================= BLOG ANIMATION ================= */

const blogCards = document.querySelectorAll(".blog-card");

blogCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


/* Scroll Animation */

const blogObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

blogCards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(70px)";
card.style.transition=".8s";

blogObserver.observe(card);

});