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