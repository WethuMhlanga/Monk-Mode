function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Self-Development Hub! 🚀");

    // Smooth scrolling for navigation menu
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Function to create a pop-up notification
function createPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("popup-message");
    popup.innerText = message;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.classList.add("show");
    }, 100); // Small delay for animation

    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => popup.remove(), 500);
    }, 4000); // Message disappears after 4 seconds
}

// Function to generate random messages
function randomTip(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Functions to trigger pop-up messages
function showFinanceTip() {
    const tips = [
        "Start budgeting now to understand your income and expenses.",
        "Learn the basics of credit: how to build it and how to avoid debt traps.",
        "Take advantage of student discounts and deals to save money.",
        "Use free or affordable apps to manage your money and track spending.",
        "Open a savings account to start building your financial foundation.",
        "Avoid using credit cards for unnecessary purchases, especially when starting out.",
        "Start building an emergency fund, even if it’s just small amounts at first.",
        "Take part in university workshops or seminars on personal finance.",
        "Don’t let student loans grow unchecked; learn about repayment options early.",
        "Look into scholarships and financial aid programs to minimize student debt.",
        "Learn to cook and prepare meals at home instead of ordering takeout.",
        "Take advantage of tax-free savings accounts if available to you.",
        "Invest in books or online courses to improve your financial literacy.",
        "Understand how student loans work and the interest rates attached to them.",
        "Create a habit of saving a portion of any pocket money or part-time job income.",
        "Start practicing delayed gratification—save up for the things you want rather than using credit.",
        "Consider working part-time or freelance to gain extra income and build your resume.",
        "Don’t ignore your credit score—learn how it works and check it periodically.",
        "Plan your big purchases in advance so you can avoid impulse buying.",
        "Use student apps for textbooks and online resources rather than buying expensive books.",
        "Look for ways to make passive income while studying, like online tutoring or investing in index funds.",
        "Be mindful of social pressures—just because others are spending doesn’t mean you have to.",
        "Always read the fine print in any contract or subscription you sign up for.",
        "Start networking with financially successful people; learning from them can pay off in the future.",
        "Use student bank accounts that offer perks like no monthly fees and cashback.",
        "Invest time in learning about different types of investments and how they work.",
        "Don’t be afraid to ask for financial advice from trusted professors or mentors.",
        "Look for free events or resources on financial literacy from your university or community.",
        "Explore ways to travel cheaply, such as backpacking or taking advantage of student travel deals.",
        "Automate your savings so you’re not tempted to spend what you’ve set aside.",
        "Learn to differentiate between wants and needs to help prioritize spending.",
        "Start learning about entrepreneurship and how you could turn your passion into a business.",
        "Be cautious about co-signing loans or borrowing money from friends and family.",
        "Understand that building wealth is a long-term process—don’t expect to be rich overnight.",
        "Track your credit card spending carefully to avoid racking up unnecessary debt.",
        "Look into university or local programs that teach entrepreneurship and start-up basics.",
        "Start investing in low-risk options like index funds or ETFs to learn the basics of the stock market.",
        "Learn about budgeting apps and tools to stay on top of your finances and avoid overspending.",
        "Be mindful of the hidden costs of studying abroad, such as travel expenses and insurance.",
        "Start saving for your retirement, even if it’s just a small amount at first. Time is your greatest asset.",
        "Pay attention to the value of networking—many financial opportunities come through connections.",
        "Understand the impact of compound interest on your savings and debt—it works in your favor when you save!",
        "Be disciplined about avoiding unnecessary subscriptions—cancel the ones you don’t need.",
        "Consider attending local meetups or webinars on personal finance to boost your financial IQ.",
        "If you’re tempted to buy a new gadget, evaluate if it’s necessary or if you can live without it for a while.",
        "Learn about the concept of 'side hustles' and explore if you can monetize a hobby or skill.",
        "Work on building your personal brand early on—being financially successful often starts with being known in the right circles.",
        "Start learning about different forms of investment, from stocks to real estate, to broaden your financial horizons.",
        "Understand that learning about money isn’t about getting rich quickly, but about managing what you already have wisely."
    ];
    createPopup(randomTip(tips));
}


function showWellnessTip() {
    const tips = [
        "Take 5 minutes to practice deep breathing.",
        "Go for a short walk to clear your mind.",
        "Write down 3 things you’re grateful for today.",
        "Listen to calming music before sleep.",
        "Stay hydrated—drink at least 8 glasses of water daily.",
        "Practice meditation for at least 10 minutes every day.",
        "Get at least 7-9 hours of sleep each night.",
        "Avoid screens at least 30 minutes before bedtime.",
        "Take deep breaths when feeling overwhelmed.",
        "Read a book to relax your mind.",
        "Stretch for 5-10 minutes to release tension.",
        "Spend time in nature or take a walk outside.",
        "Limit your caffeine intake to avoid anxiety.",
        "Talk to a trusted friend or family member when stressed.",
        "Practice positive affirmations every morning.",
        "Reduce social media consumption to avoid negativity.",
        "Try aromatherapy with calming essential oils.",
        "Take short breaks during work to refresh your mind.",
        "Write in a journal to process your thoughts and emotions.",
        "Cook a healthy meal for yourself.",
        "Declutter your space for a clearer mind.",
        "Smile more—it boosts your mood naturally.",
        "Avoid multitasking to reduce stress.",
        "Do a fun hobby that makes you happy.",
        "Write down your worries and let them go.",
        "Limit sugar intake to maintain balanced energy levels.",
        "Practice gratitude by thanking someone every day.",
        "Take a warm bath or shower to relax.",
        "Do a digital detox for a day.",
        "Practice self-compassion and be kind to yourself.",
        "Listen to motivational or soothing podcasts.",
        "Do a simple act of kindness for someone else.",
        "Maintain a balanced diet with fruits and vegetables.",
        "Exercise regularly to improve mental health.",
        "Spend time with loved ones to boost happiness.",
        "Try guided meditation for relaxation.",
        "Take a few deep belly breaths to calm down quickly.",
        "Drink herbal tea to soothe stress.",
        "Engage in creative activities like painting or writing.",
        "Watch a comedy or something that makes you laugh.",
        "Set small, achievable goals to feel accomplished.",
        "Reduce alcohol and nicotine consumption.",
        "Use a stress ball or fidget toy for anxiety relief.",
        "Create a relaxing evening routine.",
        "Avoid comparing yourself to others.",
        "Stay organized to prevent unnecessary stress.",
        "Forgive yourself for past mistakes and move forward.",
        "Unplug and spend quality time with family or pets.",
        "Dance to your favorite music for instant stress relief.",
        "Remember, it’s okay to take a break and rest."
    ];
    createPopup(randomTip(tips));
}

function showMotivation() {
    const quotes = [
        "Success doesn’t come from what you do occasionally, but what you do consistently.",
        "Push yourself, because no one else is going to do it for you.",
        "Your only limit is your mind.",
        "Dream big. Work hard. Stay focused.",
        "Believe you can and you're halfway there.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Don’t stop when you’re tired. Stop when you’re done.",
        "It always seems impossible until it’s done.",
        "Everything you’ve ever wanted is on the other side of fear.",
        "You are capable of more than you know.",
        "The only way to do great work is to love what you do.",
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "Act as if what you do makes a difference. It does.",
        "Don’t wait for opportunity. Create it.",
        "Believe in yourself and all that you are.",
        "You are never too old to set another goal or to dream a new dream.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Don’t watch the clock; do what it does. Keep going.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Opportunities don't happen, you create them.",
        "Everything you can imagine is real.",
        "Your time is limited, don’t waste it living someone else’s life.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "You miss 100% of the shots you don’t take.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "If you want to live a happy life, tie it to a goal, not to people or things.",
        "Life is what happens when you’re busy making other plans.",
        "In the middle of every difficulty lies opportunity.",
        "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "The best way to predict the future is to create it.",
        "You don’t have to be great to start, but you have to start to be great.",
        "Nothing is impossible. The word itself says ‘I’m possible!’",
        "The only way to achieve the impossible is to believe it is possible.",
        "Don’t be afraid to give up the good to go for the great.",
        "Start where you are. Use what you have. Do what you can.",
        "It’s not whether you get knocked down, it’s whether you get up.",
        "Failure will never overtake me if my determination to succeed is strong enough.",
        "Success is not in what you have, but who you are.",
        "You are never given a dream without also being given the power to make it true.",
        "Hard work beats talent when talent doesn’t work hard.",
        "The only way to achieve greatness is to believe in yourself.",
        "If you want to fly, you have to give up the things that weigh you down.",
        "Don't count the days, make the days count.",
        "Take the risk or lose the chance.",
        "Success doesn’t just find you. You have to go out and get it.",
        "Don’t be afraid to start over. It’s a new chance to rebuild what you want.",
        "The pain you feel today will be the strength you feel tomorrow.",
        "A goal without a plan is just a wish.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "The only person you are destined to become is the person you decide to be.",
        "You don’t have to be perfect to be amazing."
    ];
    createPopup(randomTip(quotes));
}


function showQuote() {
    const quotes = [
        "Believe in yourself, and you will be unstoppable!",
        "Happiness is not by chance, but by choice.",
        "Opportunities don't happen, you create them.",
        "The only way to do great work is to love what you do.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Your only limit is your mind.",
        "Dream big and dare to fail.",
        "Success usually comes to those who are too busy to be looking for it.",
        "The best way to predict the future is to create it.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Everything you can imagine is real.",
        "Believe you can and you're halfway there.",
        "It does not matter how slowly you go as long as you do not stop.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Success is not in what you have, but who you are.",
        "Don’t wait for opportunity. Create it.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "The way to get started is to quit talking and begin doing.",
        "You are never too old to set another goal or to dream a new dream.",
        "It always seems impossible until it’s done.",
        "Do one thing every day that scares you.",
        "If you can dream it, you can do it.",
        "Success doesn’t just find you. You have to go out and get it.",
        "Life is what happens when you’re busy making other plans.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Your limitation—it’s only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
        "You don’t have to be great to start, but you have to start to be great.",
        "The key to success is to focus on goals, not obstacles.",
        "In the middle of every difficulty lies opportunity.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "I find that the harder I work, the more luck I seem to have.",
        "Don’t limit your challenges, challenge your limits.",
        "Success is what happens after you have survived all your mistakes.",
        "Your life does not get better by chance, it gets better by change.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "The only place where success comes before work is in the dictionary.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "It always seems impossible until it’s done.",
        "Do what you can with all you have, wherever you are.",
        "Opportunities are usually disguised as hard work, so most people don’t recognize them.",
        "Success is not how high you have climbed, but how you make a positive difference to the world."
    ];
    createPopup(randomTip(quotes));
}


function showJoke() {
    const jokes = [
        "Why don’t scientists trust atoms? Because they make up everything!",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "How does a South African know when it’s summer? The beer is colder!",
        "Why don’t you ever see South African elephants hiding in trees? Because they’re really good at it!",
        "What do you call a South African with no sense of humour? A tourist!",
        "Why did the chicken cross the road in Johannesburg? To avoid the traffic!",
        "You know you’re South African when you have a braai before the sun comes up.",
        "A South African walks into a bar... and a fight breaks out!",
        "What’s the most important rule of road rage in South Africa? Always hoot first, ask questions later!",
        "Why did the South African soccer player bring a ladder to the game? To reach the goal!",
        "What’s a South African’s favourite sport? Anything involving a lekker braai and a cold Castle!",
        "Why did the Springbok go to therapy? He couldn’t get over his losses!",
        "I’m not saying I’m an expert, but I know how to make a potjie and dodge the potholes!",
        "What do you call a bear stuck in a South African traffic jam? A 'crawling' bear!",
        "What did one South African say to the other after a terrible day? 'At least we still have biltong!'",
        "A tourist walks into a South African pub. The bartender says, 'Are you lost?'",
        "How do you find a South African in a crowd? Follow the sound of the vuvuzela!",
        "Why did the South African bring a pencil to the soccer match? In case he needed to draw a penalty!",
        "What do you call a group of South African giraffes? A 'giraffery' of course!",
        "Why did the South African farmer bring a rake to the bank? To make a deposit!",
        "You know you’re South African when the phrase 'biltong for breakfast' is completely normal!",
        "How do you make a South African laugh? Just mention 'Cape Town traffic'.",
        "Why did the zebra go to the bar in Durban? To get a cool drink after a long safari!",
        "What did one South African say to the other at a rugby game? 'It’s not over until the last try!'",
        "Why did the Johannesburg traffic light turn red? It couldn’t handle the stress of being yellow!",
        "How does a South African cat communicate? Through 'meow-tjies' and purr-formance!",
        "Why don’t South Africans ever need a map? They just follow the sound of the vuvuzela!",
        "What did one penguin say to the other in South Africa? 'I’m feeling ice-cold!'",
        "What’s the difference between a South African and a tourist? The tourist takes photos, the South African takes selfies!",
        "Why don’t you ever play cards with a South African? Because he’ll always be bluffing about his next braai!",
        "What do you call a South African crocodile? A ‘problem solved’!",
        "Why did the South African cross the road? To get to the other pothole!",
        "What do you call a South African who's always on their phone? A ‘Data-ated’ person!",
        "Why don’t South Africans ever have to use a GPS? Because they can always ask for directions from the nearest ‘baba’!",
        "What do you call a South African who loves biltong? A 'biltonger'!",
        "Why don’t South Africans ever play hide-and-seek? Because good luck hiding with a vuvuzela!",
        "What’s a South African’s favorite vegetable? The potato... It goes great with a braai!",
        "Why did the South African become an artist? Because they were really good at 'drawing' a crowd!",
        "What do you call a South African elephant that can play music? A 'safari-ous' composer!",
        "What’s a South African’s favourite form of exercise? Running away from traffic!",
        "Why did the chicken join the choir in Cape Town? To 'egg-cite' the crowd!",
        "How does a South African say goodbye? ‘Ja, see you at the braai!’",
        "What do you call a South African vampire? A 'blood-ong!'",
        "Why don’t you ever borrow money from a South African farmer? Because they always have a 'stable' income!",
        "What do you call a South African who can't keep secrets? A 'leak-keeper'!",
        "Why did the South African tourist go to a museum? To 'brie' in the air-conditioned room!",
        "How many South Africans does it take to change a lightbulb? Only one, but they’ll stop for a beer first!",
        "What did the South African say to the lion at the zoo? 'Not today, I’ve had enough of the 'roaring'!'",
        "Why did the South African join a band? Because they loved to play the 'vibe'!",
        "What did one South African say to the other at the pub? 'Who’s buying the next round of Castle?'",
        "Why did the South African cat run up a tree? To escape the 'purr-fect' chaos below!",
        "What do you call a South African with a good sense of humor? A 'lekker' guy!",
        "Why don’t you ever mess with a South African's food? Because they'll call it a 'braai'war!",
        "What do you call a South African mountain? Table Mountain, of course!",
        "Why did the South African take a train to work? Because the traffic jam in Joburg was unbearable!"
    ];
    createPopup(randomTip(jokes));
}


function showBusinessTip() {
    const tips = [
        "Solve a problem, and you'll have a business!",
        "Customer service can make or break your startup.",
        "Network, learn, and grow!",
        "Consistency is key to business success.",
        "The customer is always right—listen to them.",
        "Innovation is key to staying ahead of the competition.",
        "Know your target audience and serve them well.",
        "Marketing is as important as the product.",
        "Set clear goals and track your progress.",
        "Stay adaptable and open to change.",
        "Focus on quality, not just quantity.",
        "Effective leadership inspires others to succeed.",
        "Create a strong brand identity.",
        "Your team is your greatest asset.",
        "Offer value that exceeds expectations.",
        "Don’t be afraid to fail—learn from it.",
        "Use feedback to improve your product or service.",
        "Cash flow is the lifeblood of your business.",
        "Always keep your financial records in order.",
        "Don’t overextend yourself—focus on your strengths.",
        "Building relationships is crucial to success.",
        "Customer retention is more cost-effective than acquisition.",
        "Build your online presence and brand reputation.",
        "Time management is essential for productivity.",
        "Don’t neglect your competitors—study them.",
        "Effective communication can prevent many business problems.",
        "Your employees should feel valued and appreciated.",
        "Don’t try to please everyone—know your niche.",
        "Understand the importance of work-life balance.",
        "Leverage technology to increase efficiency.",
        "Start small, but think big for the future.",
        "Focus on creating solutions, not just products.",
        "Continuous learning is essential for growth.",
        "Your business needs a clear vision and mission.",
        "Financial planning is critical for long-term success.",
        "Stay patient and persistent in your efforts.",
        "Use data-driven decisions to guide your business.",
        "Always be prepared for changes in the market.",
        "Make your customer experience seamless and enjoyable.",
        "Invest in marketing that aligns with your brand.",
        "Diversify your revenue streams to reduce risk.",
        "Surround yourself with talented and motivated individuals.",
        "Celebrate milestones and successes to keep morale high.",
        "Customer loyalty is earned through trust and value.",
        "Have a clear and simple pricing strategy.",
        "Be proactive in problem-solving.",
        "Adapt to feedback and make necessary improvements.",
        "Success in business often requires patience and persistence.",
        "Don’t be afraid to delegate tasks.",
        "Building a strong online community can lead to organic growth.",
        "Focus on continuous improvement in all areas of the business.",
        "Stay focused on your core business objectives."
    ];
    createPopup(randomTip(tips));
}


function showFitnessWorkout() {
    const weeklyWorkouts = {
        "Monday": [
            "Do 20 push-ups for upper body strength!",
            "Try 30 squats to strengthen your legs!",
            "Hold a 1-minute plank for core endurance!",
            "Jump rope for 2 minutes for cardio fitness!",
            "Perform 15 burpees for a full-body workout!"
        ],
        "Tuesday": [
            "Run for 20 minutes for endurance!",
            "Do 3 sets of 15 lunges per leg!",
            "Perform 20 mountain climbers for core strength!",
            "Do 20 jumping jacks for cardio!",
            "Hold a wall sit for 1 minute!"
        ],
        "Wednesday": [
            "Do 15 push-ups!",
            "Hold a 30-second side plank on each side!",
            "Do 20 leg raises for core strength!",
            "Perform 30 seconds of high knees!",
            "Try 10 tricep dips!"
        ],
        "Thursday": [
            "Perform 20 squats!",
            "Do 10 burpees!",
            "Hold a plank for 1 minute!",
            "Try 20 walking lunges per leg!",
            "Do 15 jumping jacks!"
        ],
        "Friday": [
            "Do 15 push-ups!",
            "Try 30 seconds of plank to push-up!",
            "Run for 15 minutes!",
            "Perform 20 bicycle crunches!",
            "Do 20 step-ups per leg!"
        ],
        "Saturday": [
            "Do 20 squats!",
            "Try 20 calf raises!",
            "Perform 30 seconds of squat pulses!",
            "Hold a 1-minute plank!",
            "Do 20 burpees!"
        ],
        "Sunday": [
            "Take a 30-minute walk for active recovery!",
            "Stretch for 10-15 minutes to improve flexibility!",
            "Do 10 minutes of yoga!",
            "Hold a 1-minute plank!",
            "Do 15 push-ups!"
        ]
    };

    const dayOfTheWeek = prompt("Which day is it today? (e.g., Monday, Tuesday, etc.)");

    // Check if the input is valid
    if (weeklyWorkouts[dayOfTheWeek]) {
        const workoutsForToday = weeklyWorkouts[dayOfTheWeek];
        
        // Display the exercises in the paragraph on the page
        document.getElementById('fitness-tip').innerText = workoutsForToday.join("\n");

        // Show the exercises in a popup
        createPopup(workoutsForToday.join("\n"));
    } else {
        // Invalid day handling
        document.getElementById('fitness-tip').innerText = "Invalid day! Please enter a valid day of the week.";
        createPopup("Invalid day! Please enter a valid day of the week.");
    }
}

