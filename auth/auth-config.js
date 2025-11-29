/**
 * 🔐 Ishayna Tea - Premium Collection Authentication
 * Auto-generated authentication configuration
 */

const authConfig = {
    siteName: 'Ishayna Tea - Premium Collection',
    loginPageTitle: '🔒 Ishayna Tea - Premium Collection - Private Access',
    welcomeMessage: 'Enter password to access this website',
    password: 'teatime2025', // ⚠️ Change this password!
    theme: 'modern',
    maxAttempts: 3,
    lockoutMinutes: 15
};

// Initialize authentication when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof WebsiteAuth === 'undefined') {
        const script = document.createElement('script');
        script.src = 'auth/website-auth.js';
        script.onload = function() {
            window.websiteAuth = new WebsiteAuth(authConfig);
        };
        document.head.appendChild(script);
    } else {
        window.websiteAuth = new WebsiteAuth(authConfig);
    }
});