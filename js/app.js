document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const readingForm = document.querySelector('#new-item-form')
  readingForm.addEventListener('submit', handleReadingSubmit)
})

const handleReadingSubmit = function (event) {
  event.preventDefault()
  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value

  const readingList = document.querySelector('ul')

  const newReadingItem = document.createElement('li')
  readingList.appendChild(newReadingItem)

  const newDiv = document.createElement('div')
  newReadingItem.appendChild(newDiv)

  const newTitle = document.createElement('h2')
  newTitle.textContent = title

  const newAuthor = document.createElement('h3')
  newAuthor.textContent = author

  const newCategory = document.createElement('h3')
  newCategory.textContent = category

  newDiv.appendChild(newTitle)
  newDiv.appendChild(newAuthor)
  newDiv.appendChild(newCategory)

  event.target.reset()
}
