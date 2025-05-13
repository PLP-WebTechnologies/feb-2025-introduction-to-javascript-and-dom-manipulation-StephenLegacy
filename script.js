document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const transformBtn = document.getElementById('transform-btn');
    const colorShiftBtn = document.getElementById('color-shift-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const mainTitle = document.getElementById('main-title');
    const bioDisplay = document.getElementById('bio-display');
    const statusMessage = document.getElementById('status-message');
    const dataStream = document.getElementById('data-stream');
    
    // State
    let isElementVisible = true;
    let colorPhase = 0;
    const colorPhases = [
        { primary: '#00f7ff', secondary: '#ff00aa' },
        { primary: '#ff00aa', secondary: '#00ff88' },
        { primary: '#00ff88', secondary: '#aa00ff' },
        { primary: '#aa00ff', secondary: '#00f7ff' }
    ];
    
    // Quantum Animation Frame
    let lastTime = 0;
    const fps = 30;
    
    // Transform Button - Changes text and animates elements
    transformBtn.addEventListener('click', () => {
        // Cycle through transformation phrases
        const phrases = [
            "QUANTUM INTERFACE v3.2",
            "NEURAL LINK ACTIVE",
            "SYNCHRONIZATION: 98%",
            "BIOMETRIC SCAN COMPLETE"
        ];
        
        const currentIndex = phrases.indexOf(mainTitle.textContent);
        const nextIndex = (currentIndex + 1) % phrases.length;
        mainTitle.textContent = phrases[nextIndex];
        
        // Add animation class
        mainTitle.classList.add('transform-animate');
        setTimeout(() => {
            mainTitle.classList.remove('transform-animate');
        }, 1000);
        
        // Add data packet
        addDataPacket(`Transformation sequence ${nextIndex + 1} initiated`);
    });
    
    // Color Shift Button - Changes color scheme
    colorShiftBtn.addEventListener('click', () => {
        colorPhase = (colorPhase + 1) % colorPhases.length;
        const colors = colorPhases[colorPhase];
        
        document.documentElement.style.setProperty('--primary', colors.primary);
        document.documentElement.style.setProperty('--secondary', colors.secondary);
        
        // Update status message
        statusMessage.innerHTML = `Color matrix shifted to <span class="highlight">${colors.primary}</span> spectrum`;
        
        // Add data packet
        addDataPacket(`Color phase shifted to ${colors.primary}`);
    });
    
    // Toggle Element Button - Shows/hides the biometric display
    toggleElementBtn.addEventListener('click', () => {
        isElementVisible = !isElementVisible;
        
        if (isElementVisible) {
            bioDisplay.style.display = 'flex';
            bioDisplay.querySelector('.status-text').textContent = 'SYSTEM REACTIVATED';
            addDataPacket('Biometric display reactivated');
        } else {
            bioDisplay.style.display = 'none';
            addDataPacket('Biometric display deactivated');
        }
        
        // Animate the button
        toggleElementBtn.classList.add('button-press');
        setTimeout(() => {
            toggleElementBtn.classList.remove('button-press');
        }, 300);
    });
    
    // Add a new data packet to the stream
    function addDataPacket(message) {
        const packetId = `PKT-${Math.floor(1000 + Math.random() * 9000)}`;
        const packet = document.createElement('div');
        packet.className = 'data-packet';
        packet.innerHTML = `
            <span class="packet-id">${packetId}</span>
            <span class="packet-data">${message}</span>
        `;
        
        dataStream.insertBefore(packet, dataStream.firstChild);
        
        // Limit to 5 packets
        if (dataStream.children.length > 5) {
            dataStream.removeChild(dataStream.lastChild);
        }
        
        // Add animation
        packet.style.animation = 'packetIn 0.5s forwards';
    }
    
    // Initialize with some data
    addDataPacket('System initialization complete');
    addDataPacket('Quantum interface online');
    addDataPacket('Awaiting user input');
    
    // Animation loop for futuristic effects
    function animate(time) {
        requestAnimationFrame(animate);
        
        if (time - lastTime > 1000 / fps) {
            // Update any continuous animations here
            lastTime = time;
        }
    }
    
    animate(0);
});