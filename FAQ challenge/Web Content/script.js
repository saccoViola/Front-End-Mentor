document.getElementById("first-question").addEventListener("click", function() {
    let paragraph = document.getElementById("first-answer");
    const h2Element = document.getElementById("first-question");
    if (paragraph.classList.contains("hidden")) {
        paragraph.classList.remove("hidden");
        h2Element.className="minus-button";
    } else {
        paragraph.classList.add("hidden");
        h2Element.className="plus-button";
    }
}); 
document.getElementById("second-question").addEventListener("click", function() {
    let paragraph = document.getElementById("second-answer");
    const h2Element = document.getElementById("second-question");
    if (paragraph.classList.contains("hidden")) {
        paragraph.classList.remove("hidden");
        h2Element.className="minus-button";
    } else {
        paragraph.classList.add("hidden");
        h2Element.className="plus-button";
    }
});
document.getElementById("third-question").addEventListener("click", function() {
    let paragraph = document.getElementById("third-answer");
    const h2Element = document.getElementById("third-question");
    if (paragraph.classList.contains("hidden")) {
        paragraph.classList.remove("hidden");
        h2Element.className="minus-button";
    } else {
        paragraph.classList.add("hidden");
        h2Element.className="plus-button";
    }
});
document.getElementById("forth-question").addEventListener("click", function() {
    let paragraph = document.getElementById("forth-answer");
    const h2Element = document.getElementById("forth-question");
    if (paragraph.classList.contains("hidden")) {
        paragraph.classList.remove("hidden");
        h2Element.className="minus-button";
    } else {
        paragraph.classList.add("hidden");
        h2Element.className="plus-button";
    }
});

    /*document.addEventListener("DOMContentLoaded", function() {
    function toggleVisibility(event) {
        const questionElement = event.target;
        console.log("Clicked element:", questionElement.id); // Log per debug
        const answerElementId = questionElement.id.replace('question', 'answer');
        console.log("Answer element ID:", answerElementId); // Log per debug
        const answerElement = document.getElementById(answerElementId);
        
        if (answerElement) {
            if (answerElement.classList.contains("hidden")) {
                answerElement.classList.remove("hidden");
                questionElement.classList.remove("plus-button");
                questionElement.classList.add("minus-button");
            } else {
                answerElement.classList.add("hidden");
                questionElement.classList.remove("minus-button");
                questionElement.classList.add("plus-button");
            }
        } else {
            console.error("Answer element not found for ID:", answerElementId); // Log per errori
        }
    }

    const questions = document.querySelectorAll(".question");
    questions.forEach(function(question) {
        console.log("Attaching click event to:", question.id); // Log per debug
        question.addEventListener("click", toggleVisibility);
    });
});
*/

