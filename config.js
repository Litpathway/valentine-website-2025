// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Ifeoluwa",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Ifeoluwa, I choose you. 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💗', '💖', '💝', '💕', '💘', '❤️'],  // Heart emojis
        bears: ['🧸', '🐻', '🐻‍❄️']                   // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Before anything… do you know how much you mean to me? 🥺", // First interaction
            yesBtn: "Tell me 💕",                                            // Text for "Yes" button
            noBtn: "Not sure 🙈",                                            // Text for "No" button
            secretAnswer: "You’re my safest place. Always. ❤️"              // Secret hover message
        },
        second: {
            text: "Okay… how much should I spoil you today? 😌",             // For the love meter
            startText: "This much!",                                        // Text before the percentage
            nextBtn: "Next 💖"                                              // Text for the next button
        },
        third: {
            text: "Will you be my Valentine today and every day after? 🌹",  // The big question!
            yesBtn: "Yes baby 💝",                                          // Text for "Yes" button
            noBtn: "Still yes 😏"                                           // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "AYYY! That’s my girl 😭💝 I love you more than words.", // Shows when they go past 5000%
        high: "You’re my favorite person, forever. 🚀💖",                 // Shows when they go past 1000%
        normal: "I’ll take it 😌💕 and I’m still not done loving you."    // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "💌 A Note For You, Ife mi 💖",
        message:
            "My dearest Ife mi,\n\n" +
            "I wanted to write this like a real note, because you deserve something thoughtful.\n\n" +
            "You are one of the most thoughtful people I’ve ever met. The way you think deeply, the way you carry yourself with intelligence and self-confidence… it inspires me more than you know.\n\n" +
            "The day you agreed to be mine was the happiest day of my life. I remember that feeling clearly. It was peace, excitement, gratitude… all at once. And I still feel that way about you.\n\n" +
            "Thank you for being you. Thank you for choosing me. I’m choosing you again today, and I will keep choosing you.\n\n" +
            "Happy Valentine’s Day, my love.\n\n" +
            "With all my heart,\n" +
            "Yours always ❤️",
        emojis: "💌🖊️💖✨🥰🤗💋"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ff9a9e",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#fad0c4",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff4d6d",     // Button color (should stand out against the background)
        buttonHover: "#ff758f",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#c9184a"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "14s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "55px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.6         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play our song",     // Button text to start music
        stopText: "🔇 Stop music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
