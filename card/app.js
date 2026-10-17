const billingToggle = document.getElementById('billingToggle');
const priceElements = document.querySelectorAll('.card-price');
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.cards');

billingToggle.addEventListener('change', function () {
    const isYearly = billingToggle.checked;

    priceElements.forEach(priceEl => {
        const monthlyPrice = priceEl.getAttribute('data-monthly');
        const yearlyPrice = priceEl.getAttribute('data-yearly');
        const currentPrice = isYearly ? yearlyPrice : yearlyPrice ? yearlyPrice : monthlyPrice; 
        const selectedPriceValue = isYearly ? yearlyPrice : monthlyPrice;
        const periodText = isYearly ? '/year' : '/month';
        priceEl.innerHTML = `${selectedPriceValue} <span>${periodText}</span>`;
    });
});


filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});