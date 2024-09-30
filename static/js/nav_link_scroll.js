// Function to add 'active' class to the correct navbar link based on the section in view
function setActiveNavLink() {
    const sections = [
      { id: 'intro-section', link: document.getElementById('home-link') },
      { id: 'projects', link: document.getElementById('projects-link') }
    ];

    let scrollPosition = window.scrollY || window.pageYOffset;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.scrollHeight;
  
    sections.forEach(section => {
      const sectionElement = document.getElementById(section.id);
  
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
  
        // Special case for the home section: trigger later when scrolling back up
        if (section.id === 'intro-section') {
          const homeOffset = 300; // Delay activation when scrolling back up (you can adjust this value)
          if (scrollPosition < sectionHeight - homeOffset) {
            section.link.classList.add('active');
          } else {
            section.link.classList.remove('active');
          }
        } else if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight) {
            section.link.classList.add('active');
            } else {
            section.link.classList.remove('active');
        }
  
        
      }
    });
  }
  
  window.addEventListener('scroll', setActiveNavLink);