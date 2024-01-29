// Tabs
const listTabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('[data-tab-content]');

listTabs.forEach(tab => 
    tab.addEventListener('click', event => {
    
    const tabsTitleTarget = event.target.getAttribute('data-tab');
    listTabs.forEach(element => element.classList.remove('active-tab'));

    contents.forEach(card => card.classList.add('hidden'));

    tab.classList.add('active-tab');

    document.getElementById(tabsTitleTarget).classList.remove('hidden');

}));

document.querySelector('[data-tab="tab-1"]').classList.add('active-tab')
document.querySelector('#tab-1').classList.remove('hidden');


// Accordion
const titles = document.querySelectorAll('.accordion__title');
const accordionContents = document.querySelectorAll('.accordion__content');

titles.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tabAccordion);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        accordionContents.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });
        titles.forEach(element => element.classList.remove('active'));
        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))

document.querySelector('[data-tab-accordion="tabAccordion-1"]').classList.add('active');
document.querySelector('#tabAccordion-1').classList.add('active');
document.querySelector('#tabAccordion-1').style.maxHeight = document.querySelector('#tabAccordion-1').scrollHeight + 'px';