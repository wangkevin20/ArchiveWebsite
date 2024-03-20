const paragraphs = document.querySelectorAll('.container p');

function typeWriter(element, text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (typeof callback === 'function') callback();
        }
    }
    type();
}

let currentIndex = 0;

function typeNextParagraph() {
    if (currentIndex < paragraphs.length) {
        const paragraph = paragraphs[currentIndex];
        const text = paragraph.innerHTML;
        paragraph.style.display = 'block'; // Show the paragraph
        paragraph.innerHTML = ''; // Clear the text
        typeWriter(paragraph, text, 10, () => {
            currentIndex++;
            typeNextParagraph();
        });
    }
}

typeNextParagraph();

