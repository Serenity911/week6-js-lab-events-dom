document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const readingForm = document.querySelector('#new-item-form');
  readingForm.addEventListener('submit', handleReadingSubmit);

  const liItem = document.getElementById('reading-list');
  console.log(liItem);

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(liItem, config);

});


const handleReadingSubmit = function (event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const readingList = document.querySelector('ul');

  const newReadingItem = document.createElement('li');
  readingList.appendChild(newReadingItem);

  const newDiv = document.createElement('div');
  newReadingItem.appendChild(newDiv);

  const newTitle = document.createElement('h2');
  newTitle.textContent = title;

  const newAuthor = document.createElement('h3');
  newAuthor.textContent = author;

  const newCategory = document.createElement('p');
  newCategory.textContent = category;

  newDiv.appendChild(newTitle);
  newDiv.appendChild(newAuthor);
  newDiv.appendChild(newCategory);

  event.target.reset();
};




const addDeleteButton = function () {
  if ( document.querySelector('#UniqueDelete')){
    return;
  };
  const deleteButton = createDeleteButton();

  const body = document.querySelector('body');
  body.appendChild(deleteButton);

  const buttonDelete = document.querySelector('#UniqueDelete');
  buttonDelete.addEventListener('click', handleClickDelete);
};

const createDeleteButton = function () {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete All";
  deleteButton.id = "UniqueDelete";
  return deleteButton;
};


const checkIfLi = function() {
  if (liItem !== null);
  this.addDeleteButton();
};

const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
  console.log(mutationsList);
  if (mutationsList.length > 0) {
    addDeleteButton();
  };
};

const handleClickDelete = function () {
  const allReadingItem = document.querySelector('ul');
  allReadingItem.innerHTML = "";
};
