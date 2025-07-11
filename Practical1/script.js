
const votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0,
    'C++': 0
};

function vote(language) {
    votes[language]++;
    updateVotes();
}

function updateVotes() {
    document.getElementById('js-count').textContent = votes.JavaScript;
    document.getElementById('py-count').textContent = votes.Python;
    document.getElementById('java-count').textContent = votes.Java;
    document.getElementById('cpp-count').textContent = votes['C++'];
}

setInterval(() => {
    const languages = Object.keys(votes);
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    votes[randomLang]++;
    updateVotes();
}, 2000); 
