// Sample gallery data
const galleryItems = [
    {
        imageUrl: './assets/img1.webp',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
    {
        imageUrl: 'https://cdn.dribbble.com/userupload/18353403/file/original-e20e5c335dc803e8d6af284ba0ab0050.png?format=webp&resize=1200x900&vertical=center',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
    {
        imageUrl: 'https://cdn.dribbble.com/userupload/18352728/file/still-7b9b434dff2274a93176a04f17d24d54.png?format=webp&resize=450x338&vertical=center',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
    {
        imageUrl: 'https://cdn.dribbble.com/userupload/18347637/file/original-309130d3093104f9cc50e542cf7f3250.jpg?format=webp&resize=1200x900&vertical=center',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
    {
        imageUrl: 'https://cdn.dribbble.com/userupload/18351526/file/original-dbef46c1fcff00b8197c9c3748cd9538.png?format=webp&resize=450x338&vertical=center',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
    {
        imageUrl: 'https://cdn.dribbble.com/userupload/18347406/file/original-7f4c2487fe05e24f463dd9ce75ea088d.png?format=webp&resize=450x338&vertical=center',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
    {
        imageUrl: 'https://cdn.dribbble.com/userupload/18342934/file/original-30b9c85f45e5d486e1109b768a8a82f6.jpg?crop=58x51-1521x1149&format=webp&resize=450x338&vertical=center',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
    {
        imageUrl: 'https://cdn.dribbble.com/userupload/18341429/file/original-3314a0ac24ffde2b6c0032a167345b04.png?format=webp&resize=450x338&vertical=center',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
    {
        imageUrl: 'https://cdn.dribbble.com/userupload/18137284/file/still-066cecaa85106ca799408607b0b48563.png?format=webp&resize=450x338&vertical=center',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
    {
        imageUrl: './assets/img1.webp',
        title: 'Design Project 1',
        designer: 'Designer Name',
        likes: 86,
        views: 2000
    },
];

// Function to create gallery items
function createGalleryItems() {
    const gallery = document.querySelector('.gallery');
    
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="gallery-info">
                <div class="designer-info">
                    <h3>${item.title}</h3>
                    <p>${item.designer}</p>
                </div>
                <div class="stats">
                    <span><i class="fas fa-heart"></i> ${item.likes}</span>
                    <span><i class="fas fa-eye"></i> ${item.views}</span>
                </div>
            </div>
        `;
        
        gallery.appendChild(galleryItem);
    });
}

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createGalleryItems();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.style.display = 'none';
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
});

// Search functionality
const searchInput = document.querySelector('.search-container input');
searchInput.addEventListener('input', (e) => {
    // Add search logic here
    console.log('Searching for:', e.target.value);
});

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-categories a');
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Add filter logic here
        console.log('Filtering by:', button.textContent);
    });
}); 