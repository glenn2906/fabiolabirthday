// Global variables
let isLoggedIn = false;

// Internal photo data - Add your photos here
const photoData = [
    {
        src: 'image/ebi (0).jpg',
        caption: 'first photo on my laptop',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (1).jpeg',
        caption: '📷',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (2).jpeg',
        caption: 'sapa ini bocil?',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (3).jpeg',
        caption: '🐈',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (4).jpeg',
        caption: '🌸',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (5).jpeg',
        caption: '💚',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (6).jpeg',
        caption: 'kerenn bangett anjayy',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (7).jpeg',
        caption: 'juara piala presiden boss',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (9).jpeg',
        caption: '🌼',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (11).jpeg',
        caption: '✌🏼',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (12).jpeg',
        caption: 'ANJAYY',
        fallbackIcon: 'fas fa-baby'
    },
    {
        src: 'image/ebi (13).jpeg',
        caption: '🖤🤍',
        fallbackIcon: 'fas fa-baby'
    },
];

// Internal message data - Add your messages here
const messageData = [
    {
        author: 'Glenn',
        content: 'Happy birthday yahh, selamat bertambah tua wahaha, panjang umur sehat selalu nehh. Tetap jadi my favorite ebi bucu yang kita kenal, semangatt terus yahh, remember i always with u jangan simpan beban sendiri kedepannya berbagi lah dengan diriku ini. maaf yahh kalo kado dari diri ini cuma begini. sekali lagi habede ebi bucuu kuu, i love u 3000 in every universe! (anjay)'
    },
    {
        author: 'Tofu',
        content: 'Habede emakkk, jang talalu gemes p kita nehh, jang kita gigi awkwkw, semoga emak banya duit supaya tofu makang enak terus hehehe'
    },
    {
        author: 'Bita',
        content: 'Happy birthdayy cantik, happy level up! Semoga di usia baru ini, kamu selalu dikelilingi hal-hal baik, orang-orang yang tulus, dan kesempatan-kesempatan yang bikin kamu makin berkembang. Kamu itu spesial, in ways you probably dont even realize. Thanks for being you real, strong, and warm, even when the world isnt always kind. I dont know what the future holds, but I always wish the best for you. Enjoy your day, and dont forget to smile a little extra today because you truly deserve to be happy.With warm thoughts, ur fav boy or whatever'
    },
    {
        author: 'Mellysa & Evert',
        content: 'habede ebix~ ihiyy ada yg bertambah umur nichhh, so genap 21 tahun (eh ganjil katuu, ganjil 21 HHAHAHHA), God bless u n smoga lulus bareng, langgeng ya sama mas wawan, all the best to u'
    },
    {
        author: 'Emely',
        content: 'Hallooo Our Mams Ebii 💗 Selamat hari ulang tahun 🎂 Terima kasih so jadi Kakak tertua yang sayang pa torang 4 adik adik cantik HAHAHA 💗 21 tahun lohh so berhasil jdi manusia kuat! Nd sllu gampang mmg, namanya juga hidup ^.^ tapi ta yakin Mom bisa 💗 Sehat dan bahagia sllu neh! God loves u so do i 💗 God bless youuuuuu'
    },
    {
        author: 'Janary',
        content: 'haiii eby cantikk🦋🐣👋.. todayy idd yourrr birthdayy rightt, happyyy levelll uppp dayyy 🎂🎉 tahun ini umur kamu bertambah semogaaa wishlistt kamuuu diii tahunnn iniii tercapaiii yaaa cantikk🎉🤭 ,ohhh yaaa Make a wish for u birthdayy🎈🙌 jangannn lupaaa bilanggg terimakasiii keee diriii yaaa karnaaa udahhh bertahannn sampaiii umurrr kamuuu yangg sekaranggg inii ,semogaa dengannn bertambahnyaa usiaaa, kamuu bisaa lebihhh baikkk lagiii dariii yanggg sebelumm nyaa  semoga kamu sehat, makin dewasa , apapun yang kamu inginkan bisa terjadi, banyak hal yang sudah kmu laluin dan masih bnyk hal yng blm km laluin but its okayyy, apapun susahnya apapun sedihnya apapun senangnya kamu nikmatin dn brsyukur.semoga banyak kebahagiaan yang kembali dari hari ini🎉,  semoga semua harapan yg diinginkan menjadi kenyataan, semoga akan ada banyak kebahagiaan yang datang ke dalam hidupmu 🎈semoga harimu jauh lebih menyenangkan sesuai dengan harapann mu🤗 Sekali lagi selamat ulang tahun yaa cantikk 💝, walaupun awalnya dikuat2in aj dan slnjutnya harus slalu kuat💪, ceria dan bahagia yaa!! 🌷✨🎉Happiest bday!! sukses n enjoy ur life, stay happy healty yaa💝🎊'
    },
    {
        author: 'Keryn',
        content: 'halaurr best best bestiee Just wanna say, habede~ ciee kiw kiw, uhuyyy proud of you, bisa tahan dgn kami" ini para anak-anakmu stay safe and health, we always be with you dan ingatlah kita selalu bersedia menjadi tempat curhatnya "alay mar io", and... dont worry, 2 bln leh kt mnyusul jdi bersabarlah dan tunggulah kedatanganku 💨 salam dari bonzi jga 🐹'
    },
];

// Login credentials - Change these as needed
const validCredentials = {
    username: 'fabiola',
    password: 'ebi250504'
};

// Navigation functionality
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionName).classList.add('active');

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');

    // Load content for specific sections
    if (sectionName === 'album') {
        loadPhotoGallery();
    } else if (sectionName === 'message' && !isLoggedIn) {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('messagesContainer').style.display = 'none';
    }
}

// Load photo gallery from internal data
function loadPhotoGallery() {
    const photoGrid = document.getElementById('photoGrid');
    
    // Show loading state
    photoGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i>Loading photos...</div>';
    
    // Simulate loading delay
    setTimeout(() => {
        photoGrid.innerHTML = '';
        
        photoData.forEach((photo, index) => {
            const photoCard = document.createElement('div');
            photoCard.className = 'photo-card';
            photoCard.style.animationDelay = `${index * 0.1}s`;
            
            // Try to load the actual image, fallback to placeholder if not found
            const img = new Image();
            img.onload = function() {
                photoCard.innerHTML = `
                    <img src="${photo.src}" alt="${photo.caption}">
                    <div class="photo-caption">${photo.caption}</div>
                `;
            };
            img.onerror = function() {
                photoCard.innerHTML = `
                    <div class="photo-placeholder">
                        <i class="${photo.fallbackIcon}"></i>
                    </div>
                    <div class="photo-caption">${photo.caption}</div>
                `;
            };
            img.src = photo.src;
            
            // Add initial placeholder while loading
            photoCard.innerHTML = `
                <div class="photo-placeholder">
                    <i class="fas fa-image"></i>
                </div>
                <div class="photo-caption">${photo.caption}</div>
            `;
            
            photoGrid.appendChild(photoCard);
        });
    }, 500);
}

// Load birthday messages from internal data
function loadMessages() {
    const messagesList = document.getElementById('messagesList');
    messagesList.innerHTML = '';
    
    messageData.forEach((message, index) => {
        const messageCard = document.createElement('div');
        messageCard.className = 'message-card';
        messageCard.style.animationDelay = `${index * 0.1}s`;
        messageCard.innerHTML = `
            <div class="message-author">From ${message.author}</div>
            <div class="message-content">${message.content}</div>
        `;
        messagesList.appendChild(messageCard);
    });
}

// Login functionality
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const alertDiv = document.getElementById('loginAlert');

    // Validate credentials
    if (username === validCredentials.username && password === validCredentials.password) {
        isLoggedIn = true;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('messagesContainer').style.display = 'block';
        alertDiv.innerHTML = '';
        
        // Load messages
        loadMessages();
        
        // Show success message briefly
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success';
        successAlert.innerHTML = '<i class="fas fa-check-circle me-2"></i>Welcome! Loading your messages...';
        document.querySelector('.messages-container').prepend(successAlert);
        
        setTimeout(() => {
            if (successAlert.parentNode) {
                successAlert.remove();
            }
        }, 2000);
        
    } else {
        alertDiv.innerHTML = '<div class="alert alert-danger"><i class="fas fa-exclamation-triangle me-2"></i>Invalid username or password. Please try again.</div>';
        
        // Shake animation for failed login
        const loginContainer = document.getElementById('loginForm');
        loginContainer.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(() => {
            loginContainer.style.animation = '';
            alertDiv.innerHTML = '';
        }, 3000);
    }
}

// Logout functionality
function logout() {
    isLoggedIn = false;
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('messagesContainer').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginAlert').innerHTML = '';
    
    // Clear messages
    document.getElementById('messagesList').innerHTML = '';
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile-specific optimizations
    if (window.innerWidth <= 768) {
        // Reduce animation duration for better mobile performance
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        
        // Optimize image loading for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.style.willChange = 'auto';
        });
    }
    
    // Prevent zoom on input focus for iOS
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (window.innerWidth < 768) {
                const viewport = document.querySelector('meta[name="viewport"]');
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            }
        });
        
        input.addEventListener('blur', function() {
            if (window.innerWidth < 768) {
                const viewport = document.querySelector('meta[name="viewport"]');
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            }
        });
    });
    
    // Add click animations to interactive elements
    document.addEventListener('click', function(e) {
        if (e.target.closest('.photo-card')) {
            const card = e.target.closest('.photo-card');
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        }
    });

    // Add staggered animation delays to celebration icons
    const icons = document.querySelectorAll('.celebration-icons i');
    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Preload album section
    setTimeout(() => {
        loadPhotoGallery();
    }, 1000);
    
    // Add shake animation for failed login
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isLoggedIn) {
            logout();
        }
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });
    
    // Optimize for mobile browsers
    if ('serviceWorker' in navigator && window.innerWidth <= 768) {
        // Add touch feedback
        document.body.style.webkitTapHighlightColor = 'rgba(255, 107, 157, 0.3)';
    }
    
    // Add responsive image loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        // This will be used for lazy loading when images are added
        setTimeout(() => {
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }, 1000);
    }
});

// Utility function to add new photos programmatically
function addPhoto(src, caption, fallbackIcon = 'fas fa-image') {
    photoData.push({
        src: src,
        caption: caption,
        fallbackIcon: fallbackIcon
    });
    
    // Reload gallery if currently viewing album
    const albumSection = document.getElementById('album');
    if (albumSection.classList.contains('active')) {
        loadPhotoGallery();
    }
}

// Utility function to add new messages programmatically
function addMessage(author, content) {
    messageData.push({
        author: author,
        content: content
    });
    
    // Reload messages if currently logged in and viewing messages
    if (isLoggedIn && document.getElementById('messagesContainer').style.display !== 'none') {
        loadMessages();
    }
}

function typeText(elementId, text, speed = 60, callback = null) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    typeText('greetingText', 'Happy Birthday Fabiolaaa!', 80, () => {
        typeText(
            'messageText',
            'Wish u all the best, enjoy ur birthday. remember, i love u 3000 in every universe!',
            40
        );
    });
});

function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const vinyl = document.querySelector('.floating-vinyl');
    const icon = document.getElementById('playIcon');

    if (audio.paused) {
        audio.play();
        vinyl.classList.add('spinning');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        vinyl.classList.remove('spinning');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

// Auto-play setup saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic');
    const vinyl = document.querySelector('.floating-vinyl');
    const icon = document.getElementById('playIcon');

    audio.play().then(() => {
        vinyl.classList.add('spinning');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }).catch(() => {
        // autoplay diblokir oleh browser, menunggu user klik
    });
});


// Export functions for external use (if needed)
window.addPhoto = addPhoto;
window.addMessage = addMessage;