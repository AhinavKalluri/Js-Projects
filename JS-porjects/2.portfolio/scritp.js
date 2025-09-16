// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Add dark mode button
const darkModeBtn = document.createElement('button');
darkModeBtn.innerText = 'Toggle Dark Mode';
darkModeBtn.style.position = 'fixed';
darkModeBtn.style.bottom = '20px';
darkModeBtn.style.right = '20px';
darkModeBtn.style.padding = '10px';
darkModeBtn.style.backgroundColor = '#3498db';
darkModeBtn.style.color = '#fff';
darkModeBtn.style.border = 'none';
darkModeBtn.style.borderRadius = '5px';
darkModeBtn.style.cursor = 'pointer';
darkModeBtn.onclick = toggleDarkMode;
document.body.appendChild(darkModeBtn);

// Dark mode styles
const darkStyle = document.createElement('style');
darkStyle.innerHTML = `
.dark-mode {
    background-color: #1a1a1a;
    color: #f5f5f5;
}
.dark-mode table {
    background-color: #2c2c2c;
}
.dark-mode header, .dark-mode footer {
    background-color: #111;
}
.dark-mode a {
    color: #1abc9c;
}
`;
document.head.appendChild(darkStyle);

// Typing Animation for Title
const title = document.querySelector('h2');
const text = "Web Developer and Designer";
let index = 0;

const typeEffect = () => {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
};

title.innerHTML = "";
typeEffect();

// Smooth Scroll Navigation (for demonstration)
const navLinks = document.querySelectorAll('header p');
navLinks.forEach(link => {
    link.style.cursor = 'pointer';
    link.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});

// Popup Modal for Peer Reviews
const peerReviewTable = document.querySelectorAll('table')[1];
peerReviewTable.querySelectorAll('td').forEach((td, i) => {
    td.style.cursor = 'pointer';
    td.onclick = () => showModal(td.innerText);
});

const showModal = (text) => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const modalContent = document.createElement('div');
    modalContent.style.background = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.maxWidth = '600px';
    modalContent.innerHTML = `<p>${text}</p><button style="margin-top:10px;">Close</button>`;

    modalContent.querySelector('button').onclick = () => document.body.removeChild(modal);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);
};

// Dynamic Year in Footer
const footer = document.querySelector('footer');
footer.innerHTML = `© ${new Date().getFullYear()} All rights reserved by John Doe`;

// Scroll to Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑ Top';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '60px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px';
scrollBtn.style.backgroundColor = '#2c3e50';
scrollBtn.style.color = '#fff';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '5px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';

scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(scrollBtn);

// Show button when scrolling down
window.onscroll = () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
};