// Gothic Love Terminal JavaScript

class GothicTerminal {
    constructor() {
        this.output = document.getElementById('output');
        this.input = document.getElementById('command-input');
        this.modal = document.getElementById('love-confession-modal');
        this.currentLanguageIndex = 0;
        this.isInitialized = false;
        
        this.loveTranslations = [
            "I Love You",
            "Te Amo",
            "Je t'aime", 
            "Ich liebe dich",
            "Ti amo",
            "Σε αγαπώ",
            "Я тебя люблю",
            "我爱你",
            "愛してる",
            "사랑해",
            "Anh yêu em",
            "Aku cinta kamu"
        ];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startWelcomeSequence();
    }

    setupEventListeners() {
        // Terminal input
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.executeCommand(this.input.value.trim());
                this.input.value = '';
            }
        });

        // Focus input
        document.addEventListener('click', () => {
            this.input.focus();
        });

        // Modal controls
        document.getElementById('close-btn').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('giant-heart').addEventListener('click', () => {
            this.createFloatingHearts();
            this.playSound('love');
        });

        document.getElementById('language-btn').addEventListener('click', () => {
            this.toggleLanguage();
        });

        // Close modal on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display !== 'none') {
                this.closeModal();
            }
        });
    }

    startWelcomeSequence() {
        setTimeout(() => {
            document.getElementById('welcome-text').style.animation = 'none';
            document.getElementById('instructions').style.display = 'block';
            this.addOutput('🕷️ Terminal initialized. The web of love awaits your commands...');
            this.isInitialized = true;
            this.input.focus();
        }, 5000);
    }

    executeCommand(command) {
        if (!command) return;

        const cmd = command.toLowerCase().trim();
        this.addOutput(`❤️ gothic-love ~$ ${command}`, 'command-line');

        switch (cmd) {
            case 'help':
                this.addOutput('Available commands:');
                this.addOutput('• bugzy - Unleash the love confession');
                this.addOutput('• missing - Express how much I miss her');
                this.addOutput('• beautiful - Remind her of her beauty');
                this.addOutput('• nate - Personal compliments and details');
                this.addOutput('• clear - Clear the terminal');
                this.addOutput('• help - Show this help message');
                this.playSound('click');
                break;

            case 'bugzy':
                this.addOutput('🕷️ Summoning the web of love...');
                this.playSound('love');
                setTimeout(() => {
                    this.openModal();
                }, 1000);
                break;

            case 'missing':
                this.addOutput('💔 Weaving the web of longing...');
                this.playSound('love');
                setTimeout(() => {
                    this.showMissingMessage();
                }, 1500);
                break;

            case 'beautiful':
                this.addOutput('✨ Summoning words of admiration...');
                this.playSound('love');
                setTimeout(() => {
                    this.showBeautifulMessage();
                }, 1200);
                break;

            case 'nate':
                this.addOutput('💖 Gathering my favorite memories of you...');
                this.playSound('love');
                setTimeout(() => {
                    this.showNateMessage();
                }, 1800);
                break;

            case 'clear':
                this.clearOutput();
                this.playSound('click');
                break;

            default:
                if (cmd) {
                    this.addOutput(`Command not found: ${command}`);
                    this.addOutput('Type "help" for available commands');
                    this.playSound('click');
                }
                break;
        }
    }

    showMissingMessage() {
        this.addOutput('', 'empty');
        this.addOutput('💔 The Ache of Your Absence...');
        this.addOutput('', 'empty');
        this.addOutput('Naudia, my beloved ghost in the shadows of my heart,');
        this.addOutput('Every dawn breaks with the weight of your absence,');
        this.addOutput('Every sunset whispers your name in colors I can no longer see.');
        this.addOutput('', 'empty');
        this.addOutput('The silence in my room echoes with conversations we\'ll never have,');
        this.addOutput('And the empty space beside me grows colder with each passing night.');
        this.addOutput('I miss the way your laughter could chase away my darkest thoughts,');
        this.addOutput('How your voice was the melody that made my chaotic world make sense.');
        this.addOutput('', 'empty');
        this.addOutput('I miss your gentle touch that could heal wounds I didn\'t know existed,');
        this.addOutput('The way you\'d look at me like I was worth something more than broken pieces.');
        this.addOutput('Your absence is a phantom limb - I reach for you in my sleep,');
        this.addOutput('Only to wake to the cruel reality that you\'re no longer mine to hold.');
        this.addOutput('', 'empty');
        this.addOutput('The coffee tastes bitter without your morning smile,');
        this.addOutput('The stars seem dimmer without your wonder lighting up the night.');
        this.addOutput('I miss how you made ordinary moments feel like magic,');
        this.addOutput('How you saw beauty in things I thought were just... there.');
        this.addOutput('', 'empty');
        this.addOutput('Every song reminds me of you, every poem feels incomplete,');
        this.addOutput('Because the most beautiful verses were written in the language of us.');
        this.addOutput('I miss the way you challenged me to be better,');
        this.addOutput('How you believed in dreams I was too afraid to speak aloud.');
        this.addOutput('', 'empty');
        this.addOutput('The hardest part is missing who I was when I was yours,');
        this.addOutput('That version of me who felt worthy of love, of hope, of tomorrow.');
        this.addOutput('I miss the future we painted together in whispered promises,');
        this.addOutput('Now just ghosts haunting the corridors of what could have been.');
        this.addOutput('', 'empty');
        this.addOutput('🕷️ In the web of my longing, you remain forever caught... 🕷️');
    }

    showBeautifulMessage() {
        this.addOutput('', 'empty');
        this.addOutput('✨ Just in case no one told you...');
        this.addOutput('', 'empty');
        this.addOutput('Naudia, you are breathtakingly, devastatingly beautiful.');
        this.addOutput('Not just in the way poets write about or artists try to capture,');
        this.addOutput('But in the way that makes the universe pause and take notice.');
        this.addOutput('', 'empty');
        this.addOutput('The moon hides behind clouds when you smile,');
        this.addOutput('Jealous that it could never shine with the radiance you possess.');
        this.addOutput('The stars themselves dim in envy of the spark in your beautiful brown eyes,');
        this.addOutput('Those eyes that hold galaxies I could get lost in forever.');
        this.addOutput('', 'empty');
        this.addOutput('Your beauty isn\'t just skin deep - it radiates from your soul,');
        this.addOutput('From the way you see magic in mundane moments,');
        this.addOutput('From how your heart beats with compassion for broken things.');
        this.addOutput('You make flowers wish they could bloom as gracefully as you laugh.');
        this.addOutput('', 'empty');
        this.addOutput('Your brown eyes are like autumn leaves kissed by golden sunlight,');
        this.addOutput('Warm and rich and full of depths that tell stories');
        this.addOutput('Of kindness, of dreams, of a spirit too beautiful for this world.');
        this.addOutput('They hold secrets that would make the ocean weep with envy.');
        this.addOutput('', 'empty');
        this.addOutput('When you enter a room, even shadows straighten themselves,');
        this.addOutput('Hoping to frame your silhouette more perfectly.');
        this.addOutput('The wind changes direction just to play with your hair,');
        this.addOutput('And time slows down, afraid to let such beauty pass too quickly.');
        this.addOutput('', 'empty');
        this.addOutput('You are the kind of beautiful that makes hearts skip beats,');
        this.addOutput('That inspires symphonies and moves mountains.');
        this.addOutput('The kind that leaves people breathless and grateful');
        this.addOutput('Just for existing in the same world as such grace.');
        this.addOutput('', 'empty');
        this.addOutput('Your beauty is in your laugh, your thoughts, your dreams,');
        this.addOutput('In the way you love fiercely and forgive freely.');
        this.addOutput('You are a masterpiece that would make angels weep,');
        this.addOutput('A work of art that proves magic still exists.');
        this.addOutput('', 'empty');
        this.addOutput('🌙 The moon is jealous, the stars are envious,');
        this.addOutput('But I... I was blessed to know such beauty exists. ✨');
    }

    showNateMessage() {
        this.addOutput('', 'empty');
        this.addOutput('💖 My Personal Love Letter to Naudia');
        this.addOutput('', 'empty');
        this.addOutput('My dearest Naudia, there are so many little things about you');
        this.addOutput('that make my heart skip a beat every single day.');
        this.addOutput('', 'empty');
        this.addOutput('I love your 237 freckles - yes, I\'ve counted them all,');
        this.addOutput('Each one a constellation mapping the geography of my adoration.');
        this.addOutput('They\'re like tiny stars scattered across your perfect skin,');
        this.addOutput('A masterpiece that no artist could ever replicate.');
        this.addOutput('', 'empty');
        this.addOutput('I love that your favorite flowers are black dahlias and after-the-storm irises,');
        this.addOutput('It shows your soul appreciates both darkness and light,');
        this.addOutput('The mystery of shadows and the hope that follows rain.');
        this.addOutput('Just like you brought light to my darkest moments.');
        this.addOutput('', 'empty');
        this.addOutput('I love the "U" in your name - NAUDIA,');
        this.addOutput('It makes you unique in a world full of ordinary names.');
        this.addOutput('That single letter transforms everything, just like you did to my life,');
        this.addOutput('Making something beautiful out of something I thought was complete.');
        this.addOutput('', 'empty');
        this.addOutput('I love how your beautiful brown eyes sparkle in the sun,');
        this.addOutput('Like liquid amber holding flecks of pure gold.');
        this.addOutput('But even more, I love how they light up when you\'re happy,');
        this.addOutput('How joy radiates from within and makes them absolutely luminous.');
        this.addOutput('', 'empty');
        this.addOutput('I love your sweet laugh - it\'s like music from another realm,');
        this.addOutput('A melody that could heal broken hearts and mend shattered dreams.');
        this.addOutput('And your cute voice, soft and warm like honey,');
        this.addOutput('Every word you speak becomes poetry in my ears.');
        this.addOutput('', 'empty');
        this.addOutput('These aren\'t just things I noticed, Naudia,');
        this.addOutput('They\'re the details that made me fall completely, utterly in love.');
        this.addOutput('Every freckle, every laugh, every sparkle in your eyes,');
        this.addOutput('They\'re all pieces of the puzzle that is my heart.');
        this.addOutput('', 'empty');
        this.addOutput('🌸 You are my favorite person, in every single detail. 🌸');
    }

    addOutput(text, className = '') {
        const line = document.createElement('div');
        line.className = `output-line ${className}`;
        line.textContent = text;
        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }

    clearOutput() {
        this.output.innerHTML = '';
    }

    openModal() {
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.playSound('click');
        this.input.focus();
    }

    toggleLanguage() {
        this.currentLanguageIndex = (this.currentLanguageIndex + 1) % this.loveTranslations.length;
        document.getElementById('language-btn').textContent = this.loveTranslations[this.currentLanguageIndex];
        this.playSound('click');
    }

    createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.style.cssText = `
                position: absolute;
                font-size: 2rem;
                color: #dc2626;
                pointer-events: none;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: heart-burst 6s ease-out forwards;
                z-index: 1000;
            `;
            heart.textContent = '❤️';
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        // Add heart burst animation if not exists
        if (!document.querySelector('#heart-burst-style')) {
            const style = document.createElement('style');
            style.id = 'heart-burst-style';
            style.textContent = `
                @keyframes heart-burst {
                    0% { opacity: 1; transform: scale(1) translateY(0); }
                    100% { opacity: 0; transform: scale(0) translateY(-100px) rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    playSound(type) {
        // Visual feedback
        const feedback = document.createElement('div');
        feedback.className = 'sound-feedback';
        feedback.textContent = type === 'click' ? '🔊 Click!' : '🔊 Love!';
        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.remove();
        }, 1000);

        // Try to create audio with Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            if (type === 'click') {
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
            } else {
                oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
            }

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (error) {
            // Silently fail if Web Audio API is not supported
        }
    }
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GothicTerminal();
});

// Add some dynamic spider movement
document.addEventListener('DOMContentLoaded', () => {
    const spiders = document.querySelectorAll('.spider');
    
    spiders.forEach((spider, index) => {
        setInterval(() => {
            const randomX = Math.random() * 20 - 10; // -10 to 10
            const randomY = Math.random() * 20 - 10; // -10 to 10
            
            spider.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
        }, 3000 + (index * 1000)); // Stagger the movements
    });
});
