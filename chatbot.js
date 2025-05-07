document.addEventListener('DOMContentLoaded', function() {
    // Create and append the chatbot HTML
    const chatbotHTML = `
        <div class="chatbot-container" id="chatbotContainer">
            <div class="chatbot-header">
                <h3>Chat with me</h3>
                <button class="chatbot-toggle" id="chatbotToggle">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chatbot-body" id="chatbotBody">
                <div class="chat-messages" id="chatMessages">
                    <div class="message bot-message">
                        <p>Hello! I'm Brice's chatbot. How can I help you today?</p>
                    </div>
                </div>
                <div class="chat-input">
                    <input type="text" id="userInput" placeholder="Type your message...">
                    <button id="sendMessage">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
        <button class="chatbot-toggle-btn" id="chatbotToggleBtn">
            <i class="fas fa-comments"></i>
        </button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Get DOM elements
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotToggleBtn = document.getElementById('chatbotToggleBtn');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendMessageBtn = document.getElementById('sendMessage');
    
    // Toggle chatbot visibility
    chatbotToggleBtn.addEventListener('click', function() {
        chatbotContainer.classList.add('active');
        chatbotToggleBtn.style.display = 'none';
    });
    
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
        chatbotToggleBtn.style.display = 'flex';
    });
    
    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addMessage(message, 'user');
        
        // Clear input
        userInput.value = '';
        
        // Simulate bot response (you can replace this with actual API calls)
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 500);
    }
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Enhanced bot responses with more information
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Greetings
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return "Hello! I'm Brice's chatbot. How can I help you today? You can ask me about my projects, skills, education, experience, or contact information.";
        } 
        
        // About Brice
        else if (lowerMessage.includes('who are you') || lowerMessage.includes('tell me about yourself') || lowerMessage.includes('about you')) {
            return "I'm Brice William Fokou, a data-driven professional with experience in data analysis, wrangling, and visualization. I'm passionate about using data to inform public policy and business strategy. I'm currently pursuing a Bachelor of Science in Computer Technology at Bowie State University.";
        }
        
        // Projects - General
        else if ((lowerMessage.includes('project') || lowerMessage.includes('work')) && 
                !lowerMessage.includes('rural') && 
                !lowerMessage.includes('urban') && 
                !lowerMessage.includes('california') && 
                !lowerMessage.includes('housing') && 
                !lowerMessage.includes('esp') && 
                !lowerMessage.includes('pizza')) {
            return "I've worked on several projects including Rural vs Urban Access Inequality, California Housing Affordability Trends, ESP Game, and Simply Pizza. You can check them out in my Projects section!";
        } 
        
        // Specific Projects
        else if (lowerMessage.includes('rural') || lowerMessage.includes('urban')) {
            return "The Rural vs Urban Access Inequality project (March 2025) examines disparities between rural and urban access to essential services. It analyzes infrastructure, healthcare, education, and technology access gaps between rural and urban areas, providing insights into regional development challenges.";
        }
        else if (lowerMessage.includes('california') || lowerMessage.includes('housing')) {
            return "The California Housing Affordability Trends project (October 2024) examined housing affordability trends in California. It revealed a 3.5% increase in income spent on mortgages between 2017-2022, persistent racial disparities, and proposed a wage subsidy model as part of the CalWORKs Housing Support Program.";
        }
        else if (lowerMessage.includes('esp') || lowerMessage.includes('game')) {
            return "The ESP Game (Extra Sensory Perception) project (April 2023) is a Java console-based game that challenges users to test their 'ESP' by guessing randomly selected colors. It features multiple game modes with different color sets, score tracking, and result saving to a file.";
        }
        else if (lowerMessage.includes('pizza') || lowerMessage.includes('simply')) {
            return "The Simply Pizza project (October 2022) is a Java-based console application that simulates a point-of-sale system for a fictional pizza restaurant. Features include order placement, total calculation, 10% discount for orders over $50, and detailed receipt generation with tax and change calculation.";
        }
        
        // Skills
        else if (lowerMessage.includes('skill') || lowerMessage.includes('experience') || lowerMessage.includes('what can you do')) {
            return "I have skills in programming (Java, JavaScript, Python), database management (SQL, NoSQL), data analysis, and project management (Agile/Scrum). I'm also certified as a Professional Scrum Master II (PSM II) and Kanban Management Professional (KMP).";
        } 
        
        // Education
        else if (lowerMessage.includes('education') || lowerMessage.includes('school') || lowerMessage.includes('university') || lowerMessage.includes('degree')) {
            return "I'm currently pursuing a Bachelor of Science in Computer Technology at Bowie State University (2023-Present). I previously earned an Associate of Applied Science in Information Technology from Prince George's Community College (2020-2023).";
        }
        
        // Experience
        else if (lowerMessage.includes('job') || lowerMessage.includes('work experience') || lowerMessage.includes('internship')) {
            return "I've worked as a Scrum Master Intern at Agile Pinacle (June 2022-August 2022) and as a Data Analyst Intern at Elios Consulting (May 2021-August 2021). These experiences helped me develop skills in project management and data analysis.";
        }
        
        // Contact
        else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach you')) {
            return "You can reach me at brice11fokou22@gmail.com or call me at (240)-492-####. I'm also on LinkedIn and GitHub!";
        } 
        
        // Social Media
        else if (lowerMessage.includes('linkedin') || lowerMessage.includes('github') || lowerMessage.includes('social media')) {
            return "You can find me on LinkedIn at linkedin.com/in/brice-fokou and on GitHub at github.com/brice-william. Feel free to connect with me!";
        }
        
        // Certifications
        else if (lowerMessage.includes('certification') || lowerMessage.includes('cert') || lowerMessage.includes('badge')) {
            return "I have several certifications including Professional Scrum Master II (PSM II) from Scrum.org and Kanban Management Professional (KMP) from Kanban University. You can view my badges on Credly!";
        } 
        
        // Thank you
        else if (lowerMessage.includes('thank')) {
            return "You're welcome! Is there anything else I can help you with?";
        } 
        
        // Default response
        else {
            return "I'm not sure I understand. You can ask me about my projects, skills, education, experience, certifications, or contact information. How can I help you?";
        }
    }
    
    // Event listeners for sending messages
    sendMessageBtn.addEventListener('click', sendMessage);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}); 