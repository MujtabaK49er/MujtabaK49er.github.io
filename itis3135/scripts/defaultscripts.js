document.addEventListener('DOMContentLoaded', function() {
    var currentTimeElement = document.getElementById('current-time');
    var currentDate = new Date();
    currentTimeElement.textContent = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + 
                                    ' on ' + currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('user-info').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var mood = document.getElementById('mood').value;
        document.getElementById('greeting').textContent = "Hello " + name + "!! Midnight Aero Kingfisher welcomes you!! We're glad you are feeling " + mood + " today!";
    });
});

function showPolygonName() {
    const numberInput = document.getElementById('favorite-number').value;
    const absoluteNumber = Math.abs(parseInt(numberInput));
    const polygonNames = ['Henagon','Digon','Trigon','Tetragon','Pentagon','Hexagon','Heptagon','Octagon','Nonagon','Decagon'];
    const polygonName = (absoluteNumber < 11) ? polygonNames[absoluteNumber-1] : 'Invalid Input';
    alert('The name of the polygon with ' + absoluteNumber + ' sides is ' + polygonName);
}

function midnightAeroKingfisher() {  
    let kangaroo = document.getElementById("kingfisher").value;
    if (kangaroo === "yes"){
        let answerKingfisher = "Yes, Kingfishers are real birds native to various parts of the world, known for their brilliant plumage and sharp fishing abilities.";
        document.getElementById("answerKingfisher").innerHTML = answerKingfisher; 
    }
    else if (kangaroo === "no") {
        let answerKingfisher = "You're mistaken. Kingfishers are real birds, famous for their striking colors and fishing skills. You can see them near rivers, lakes, and coastal waters.";
        document.getElementById("answerKingfisher").innerHTML = answerKingfisher; 
    } else {
        let answerKingfisher = "Please answer with 'yes' or 'no'.";
        document.getElementById("answerKingfisher").innerHTML = answerKingfisher;
    }
}

function generateCompliment() {
    const compliments = [
        "Like a kingfisher's precision, your focus and determination are unmatched!",
        "With your strength and skill, you soar through challenges just like a kingfisher diving for its prey!",
        "Your elegance and grace are as captivating as a kingfisher in mid-flight!",
        "Much like a kingfisher protecting its territory, you fiercely guard your passions and dreams!",
        "Your vibrant energy shines as brightly as a kingfisher's colorful feathers!"
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    alert("Compliment: " + randomCompliment);
}

function randomFact() {
    document.getElementById("randomFact").innerText = "Did you know that kingfishers can dive into the water at speeds of up to 40 miles per hour?";
}

function randomKingfisherFact() {
    document.getElementById("randomKingfisherFact").innerText = "Did you know that kingfishers have exceptional eyesight, allowing them to spot fish from great distances, even under water!";
}

function sayGoodbye() {
    document.getElementById("goodBye").innerText = "Alright, thanks for visiting Midnight Aero Kingfisher. Stay precise and soar high!";
}
