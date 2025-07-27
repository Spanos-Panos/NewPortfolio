/**
 * EMERGENCY FIX - WORKING SKY DROP SYSTEM
 */

console.log('🚨 EMERGENCY FIX LOADING...');

let droppedKey = null;
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// AGGRESSIVE IMMEDIATE INITIALIZATION
function emergencyInit() {
    console.log('🚨 EMERGENCY INIT START');
    
    // Find elements immediately
    const triggerKey = document.getElementById('secret-trigger');
    const pupils = document.querySelectorAll('.pupil');
    
    console.log('🔍 Searching for elements...');
    console.log('Trigger:', triggerKey ? '✅ FOUND' : '❌ NOT FOUND');
    console.log('Pupils:', pupils.length + ' found');
    
    if (triggerKey) {
        console.log('🔑 SETTING UP KEY SYSTEM NOW');
        
        // Remove any existing listeners
        triggerKey.removeEventListener('click', handleKeyClick);
        
        // Style the trigger
        triggerKey.style.cursor = 'pointer';
        triggerKey.style.fontSize = '24px';
        triggerKey.style.opacity = '1';
        triggerKey.style.transition = 'all 0.2s ease';
        triggerKey.style.filter = 'drop-shadow(0 0 5px gold)';
        
        // Add hover effects
        triggerKey.addEventListener('mouseenter', function() {
            triggerKey.style.transform = 'scale(1.3)';
            triggerKey.style.filter = 'drop-shadow(0 0 10px gold)';
        });
        
        triggerKey.addEventListener('mouseleave', function() {
            triggerKey.style.transform = 'scale(1)';
            triggerKey.style.filter = 'drop-shadow(0 0 5px gold)';
        });
        
        // Add click listener
        triggerKey.addEventListener('click', handleKeyClick);
        
        console.log('✅ KEY SYSTEM READY');
    }
    
    if (pupils.length > 0) {
        console.log('👀 SETTING UP EYE TRACKING NOW');
        
        // Remove existing listener
        document.removeEventListener('mousemove', handleMouseMove);
        
        // Add mouse tracking
        document.addEventListener('mousemove', handleMouseMove);
        
        console.log('✅ EYE TRACKING READY');
    }
    
    return triggerKey && pupils.length > 0;
}

function handleKeyClick(e) {
    console.log('🎯 KEY CLICKED! Creating dropped key...');
    e.preventDefault();
    
    // Remove old key
    if (droppedKey) {
        droppedKey.remove();
    }
    
    // Create new key
    droppedKey = document.createElement('div');
    droppedKey.innerHTML = '🔑';
    droppedKey.style.cssText = `
        position: fixed;
        top: -100px;
        right: 200px;
        font-size: 40px;
        cursor: grab;
        z-index: 10000;
        user-select: none;
        transition: all 0.5s ease;
        filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8));
    `;
    
    document.body.appendChild(droppedKey);
    
    // Animate drop
    setTimeout(() => {
        droppedKey.style.top = '300px';
        droppedKey.style.transform = 'rotate(360deg)';
    }, 100);
    
    // Setup dragging after drop
    setTimeout(() => {
        setupDragging();
    }, 600);
    
    console.log('✅ KEY CREATED AND DROPPED');
}

function setupDragging() {
    if (!droppedKey) return;
    
    console.log('🖱️ SETTING UP DRAGGING');
    
    droppedKey.addEventListener('mousedown', function(e) {
        console.log('🖱️ DRAG START');
        isDragging = true;
        droppedKey.style.cursor = 'grabbing';
        
        const rect = droppedKey.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging || !droppedKey) return;
        
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        
        droppedKey.style.left = x + 'px';
        droppedKey.style.top = y + 'px';
        droppedKey.style.right = 'auto';
    });
    
    document.addEventListener('mouseup', function() {
        if (!isDragging) return;
        
        console.log('🖱️ DRAG END');
        isDragging = false;
        
        if (droppedKey) {
            droppedKey.style.cursor = 'grab';
            
            // Check if overlapping the locker
            const locker = document.getElementById('secret-target');
            if (locker) {
                const keyRect = droppedKey.getBoundingClientRect();
                const lockerRect = locker.getBoundingClientRect();
                if (
                    keyRect.right > lockerRect.left &&
                    keyRect.left < lockerRect.right &&
                    keyRect.bottom > lockerRect.top &&
                    keyRect.top < lockerRect.bottom
                ) {
                    console.log('🔓 KEY OVERLAPS LOCKER!');
                    droppedKey.style.animation = 'pulse 1s infinite';
                    droppedKey.style.filter = 'drop-shadow(0 0 20px gold)';
                    setTimeout(() => {
                        alert('🎉 Congratulations! Secret unlocked!');
                    }, 500);
                    return;
                }
            }
            // Fallback: check if near bottom for success
            const rect = droppedKey.getBoundingClientRect();
            if (rect.top > window.innerHeight - 150) {
                console.log('🎉 SUCCESS!');
                droppedKey.style.animation = 'pulse 1s infinite';
                droppedKey.style.filter = 'drop-shadow(0 0 20px gold)';
                setTimeout(() => {
                    alert('🎉 Congratulations! Secret unlocked!');
                }, 500);
            }
        }
    });
}

function handleMouseMove(e) {
    const pupils = document.querySelectorAll('.pupil');
    
    pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        if (!eye) return;
        
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(3, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 30);
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
}

// MULTIPLE INITIALIZATION ATTEMPTS
console.log('🚨 STARTING EMERGENCY INITIALIZATION SEQUENCE');

// Try immediately
emergencyInit();

// Try after DOM loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', emergencyInit);
} else {
    emergencyInit();
}

// Try after window loads
window.addEventListener('load', emergencyInit);

// Keep trying every second for 30 seconds
let attempts = 0;
const maxAttempts = 30;
const emergencyInterval = setInterval(() => {
    attempts++;
    console.log(`🚨 Emergency attempt ${attempts}/${maxAttempts}`);
    
    if (emergencyInit() || attempts >= maxAttempts) {
        clearInterval(emergencyInterval);
        if (attempts < maxAttempts) {
            console.log('✅ EMERGENCY INIT SUCCESSFUL!');
        } else {
            console.log('❌ EMERGENCY INIT FAILED AFTER ALL ATTEMPTS');
        }
    }
}, 1000);

// Global test functions
window.testKey = () => {
    console.log('🧪 Testing key trigger...');
    const trigger = document.getElementById('secret-trigger');
    if (trigger) {
        trigger.click();
    } else {
        console.log('❌ No trigger found');
    }
};

window.testEyes = () => {
    console.log('🧪 Testing eyes...');
    const pupils = document.querySelectorAll('.pupil');
    console.log('Found', pupils.length, 'pupils');
    handleMouseMove({ clientX: 100, clientY: 100 });
};

window.emergencyInit = emergencyInit;

console.log('🚨 EMERGENCY SYSTEM LOADED!');
