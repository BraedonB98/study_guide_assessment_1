
function createTitle(title) {
  return ("The " + title);
}

function buildMainCharacter(name, age, pronouns)
{
  var character = {};
  character.name = name;
  character.age = age;
  character.pronouns = pronouns;
  return(character);
}

function saveReview(review, reviews)
{
  same = 0;
  for(i in reviews)
  {
    if(review == reviews[i]){
      return reviews;
    }
  }
reviews[reviews.length]= review;
return(reviews);
}

function calculatePageCount(title)
{
  return (title.length*20);
}

function writeBook(title, character, genre)
{
  var book = {};
  book.title = title;
  book.mainCharacter = character;
  book.genre = genre;
  book.pageCount = calculatePageCount(title);
  return book;
}

function editBook(book)
{
book.pageCount = book.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}