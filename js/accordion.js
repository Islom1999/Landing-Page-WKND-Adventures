
/*accordion start*/

const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach((accordionItem, index) => {
    let accordionBtn = accordionItem.querySelector('h3');
    accordionBtn.addEventListener('click', () => {
        accordionItem.classList.toggle('accordion-item-active');
    })
})

/*accordion end*/