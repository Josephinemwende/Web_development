const cardFront = document.getElementById('card-front');
const cardNumber = document.getElementById('cardnumber')
cardFront.innerHTML = `
<div>
<img src="/src/Images/card-logo.svg">
<p>${cardNumber}</p>
</div>
`;