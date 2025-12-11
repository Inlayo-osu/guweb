// Twemoji flag helper functions
window.countryCodeToEmoji = function(countryCode) {
    if (!countryCode || countryCode.length !== 2) {
        return null;
    }
    
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    
    return String.fromCodePoint(...codePoints);
};

window.getFlagElement = function(countryCode, className = '') {
    const emoji = window.countryCodeToEmoji(countryCode);
    
    if (!emoji) {
        // Return fallback image for invalid country codes
        return `<img src="https://raw.githubusercontent.com/ppy/osu-web/master/public/images/flags/fallback.png" class="${className}" alt="Flag" onerror="this.style.display='none'">`;
    }
    
    // Return Twemoji-styled span
    return `<span class="${className}" style="font-family: 'Twemoji', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;">${emoji}</span>`;
};

// Vue filter for flags
if (typeof Vue !== 'undefined') {
    Vue.filter('flag', function(countryCode) {
        return window.countryCodeToEmoji(countryCode) || '🏳️';
    });
}

// Initialize flags on page load
document.addEventListener('DOMContentLoaded', function() {
    const flagElements = document.querySelectorAll('.twemoji-flag[data-country]');
    flagElements.forEach(function(el) {
        const countryCode = el.getAttribute('data-country');
        const emoji = window.countryCodeToEmoji(countryCode);
        if (emoji) {
            el.textContent = emoji;
            el.style.fontFamily = "'Twemoji', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif";
        } else {
            // Use fallback image
            const img = document.createElement('img');
            img.src = 'https://raw.githubusercontent.com/ppy/osu-web/master/public/images/flags/fallback.png';
            img.alt = 'Flag';
            img.className = el.className;
            img.onerror = function() { this.style.display = 'none'; };
            el.parentNode.replaceChild(img, el);
        }
    });
});
