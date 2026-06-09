function createPost(avatarSrc, author, location, contentSrc, likeCount) {
  const post = document.createElement('div');
  post.className = 'post';

  const img = document.createElement('img');
  img.className = 'post__img';
  img.src = avatarSrc;
  img.alt = 'avatar';

  const infoContainer = document.createElement('div');
  infoContainer.className = 'post__info-container';

  const name = document.createElement('p');
  name.className = 'post__name';
  name.textContent = author;

  const locationEl = document.createElement('p');
  locationEl.className = 'post__location';
  locationEl.textContent = location;

  infoContainer.append(name, locationEl);

  const content = document.createElement('img');
  content.className = 'post__content';
  content.src = contentSrc;
  content.alt = 'post';

  const activities = document.createElement('div');
  activities.className = 'post__activities';

  const like = document.createElement('img');
  like.className = 'post__activity';
  like.src = 'images/icon-heart.png';
  like.alt = 'like';

  const comment = document.createElement('img');
  comment.className = 'post__activity';
  comment.src = 'images/icon-comment.png';
  comment.alt = 'comment';

  const dm = document.createElement('img');
  dm.className = 'post__activity';
  dm.src = 'images/icon-dm.png';
  dm.alt = 'message';

  activities.append(like, comment, dm);

  const likes = document.createElement('p');
  likes.className = 'post__likes';
  likes.textContent = likeCount.toLocaleString('de-DE').replace('.',',') + ' likes';

  post.append(img, infoContainer, content, activities, likes);

  return post;
}
function addPostToMain(avatarSrc, author, location, contentSrc, likeCount) {
  const main = document.querySelector('main');
  const post = createPost(avatarSrc, author, location, contentSrc, likeCount);
  main.appendChild(post);
}
function getRandom(max){
    return Math.floor(Math.random()*(max+1));
}

const API_KEY = '56240462-45ff40a3321b4f39ce1d0c437';
const randomPage = Math.floor(Math.random() * 120) + 1; 

const perPage = getRandom(17) + 3;
const response = await fetch(`/.netlify/functions/pixabay?per_page=${perPage}`);
const data = await response.json();

const users = [
    'AlexJohnson', 'MariaSmith', 'DavidBrown', 'EmmaWilson', 'JamesTaylor',
    'SophiaMartinez', 'DanielAnderson', 'OliviaThomas', 'MatthewJackson', 'IsabellaWhite',
    'AndrewHarris', 'MiaMartin', 'JoshuaThompson', 'CharlotteGarcia', 'ChristopherMartinez',
    'AmandaRobinson', 'BenjaminClark', 'AbigailRodriguez', 'SamuelLewis', 'EmilyLee',
    'JohnWalker', 'ElizabethHall', 'JosephAllen', 'SofiaYoung', 'DavidKing',
    'AnnaWright', 'MichaelScott', 'VictoriaGreen', 'RobertBaker', 'LauraAdams'
];

const locations = [
    'New York, USA', 'London, UK', 'Paris, France', 'Tokyo, Japan', 'Berlin, Germany',
    'Rome, Italy', 'Madrid, Spain', 'Amsterdam, Netherlands', 'Toronto, Canada', 'Sydney, Australia',
    'Los Angeles, USA', 'Manchester, UK', 'Lyon, France', 'Osaka, Japan', 'Munich, Germany',
    'Milan, Italy', 'Barcelona, Spain', 'Rotterdam, Netherlands', 'Vancouver, Canada', 'Melbourne, Australia',
    'Chicago, USA', 'Liverpool, UK', 'Marseille, France', 'Kyoto, Japan', 'Hamburg, Germany',
    'Naples, Italy', 'Valencia, Spain', 'Utrecht, Netherlands', 'Montreal, Canada', 'Perth, Australia'
];

fetch(url)
  .then(response => response.json())
  .then(data => {
    // data.hits — массив из 10 изображений
    console.log(data.hits);
    for(let i = 0;i<5;i++)
    {
    addPostToMain(
    data.hits[i].largeImageURL,
    users[getRandom(users.length-1)],
    locations[getRandom(locations.length-1)],
    data.hits[i+5].largeImageURL,
    getRandom(800000)
        );
    }
  });