const cornemIpsumWords = [
    "yield", "potential", "agronomy", "trait", "package", "silage", "corn", "planter", "hybrid", "vigor",
    "row", "spacing", "combines", "seed", "selection", "rooted", "innovation", "Field", "conditions", "commit",
    "drive", "performance", "metrics", "stalk", "strength", "tassel", "rust", "disease", "resistance", "potential",
    "align", "season-long", "protection", "soil", "fertility", "enhances", "root", "development", "raise",
    "ensuring", "top-tier", "nitrogen", "efficiency", "meets", "DEKALB®", "standard", "emergence", "the",
    "rates", "push", "boundaries", "precision", "planting", "in-season", "management", "harvest", "bar",
    "timing", "optimize", "results", "brand", "is", "for", "those", "who", "never", "settle", "is", "always", "more"
];


const loremIpsumWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do",
    "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "Ut", "enim",
    "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut",
    "aliquip", "ex", "ea", "commodo", "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit",
    "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur"
];



function generateCornemIpsum() {
    const generateBy = document.getElementById('generateBy').value;
    
    // Determine which toggle buttons are active
    const startWithCornem = document.querySelector('.toggle-button[data-value="startWithCornem"]').classList.contains('active');
    const includeLorem = document.querySelector('.toggle-button[data-value="includeLorem"]').classList.contains('active');
    
    const numToGenerate = parseInt(document.getElementById('numGenerated').value);
    const resultDiv = document.getElementById('cornemIpsumResult');

    let result = '';

    let combinedWords = cornemIpsumWords.slice();
    if (includeLorem) {
        combinedWords = combinedWords.concat(loremIpsumWords);
    }

    switch (generateBy) {
        case 'words':
            result += generateByWords(combinedWords, numToGenerate);
            break;
        case 'sentences':
            result += generateBySentences(combinedWords, numToGenerate);
            break;
        case 'paragraphs':
            result += generateByParagraphs(combinedWords, numToGenerate);
            break;
        default:
            result += generateByParagraphs(combinedWords, numToGenerate);
    }

    // Prepend "Cornem ipsum" if the toggle is active
    if (startWithCornem) {
        result = result.replace(/<p>/, '<p>Cornem ipsum ');
    }

    resultDiv.innerHTML = result.trim();
}



function generateByCharacters(wordsArray, charCount) {
    let text = '';
    while (text.length < charCount) {
        const word = wordsArray[getRandomInt(0, wordsArray.length)];
        text += word + ' ';
    }
    return text.trim().slice(0, charCount) + '.';
}

function generateByWords(wordsArray, numToGenerate) {
    const numWords = numToGenerate
    let text = '';
    for (let i = 0; i < numWords; i++) {
        const word = wordsArray[getRandomInt(0, wordsArray.length)];
        text += word + ' ';
    }
    return capitalizeFirstLetter(text.trim()) + '.';
}

function generateBySentences(wordsArray, numToGenerate) {
    const numSentences = numToGenerate;
    let text = '';
    for (let i = 0; i < numSentences; i++) {
        let sentence = '';
        const numWords = getRandomInt(8, 15);
        for (let j = 0; j < numWords; j++) {
            const word = wordsArray[getRandomInt(0, wordsArray.length)];
            sentence += word + ' ';
        }
        text += capitalizeFirstLetter(sentence.trim()) + '. ';
    }
    return text.trim();
}
function generateByParagraphs(wordsArray, numToGenerate) {
    const numParagraphs = numToGenerate;
    let paragraphs = '';
    for (let i = 0; i < numParagraphs; i++) {
        let paragraph = '';
        const numSentences = getRandomInt(5, 7);  // Adds variance
        for (let j = 0; j < numSentences; j++) {
            let sentence = '';
            const numWords = getRandomInt(8, 15);
            for (let k = 0; k < numWords; k++) {
                const word = wordsArray[getRandomInt(0, wordsArray.length)];
                sentence += word + ' ';
            }
            paragraph += capitalizeFirstLetter(sentence.trim()) + '. ';
        }
        paragraphs += `<p>${paragraph.trim()}</p>`;
    }
    return paragraphs.trim();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function copyToClipboard() {
    const resultDiv = document.getElementById('cornemIpsumResult');
    const text = resultDiv.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Cornem Ipsum text copied to clipboard!");
}
