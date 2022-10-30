const text =  [
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      quote:
        "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      quote: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      quote:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
    {
      quote:
        "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "We become what we think about.",
      author: "Earl Nightingale",
    },
    {
      quote:
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      author: "Mark Twain",
    },
    {
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll",
    },
    {
      quote:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      quote: "An unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      quote: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    },
    {
      quote:
        "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi",
    },
    {
      quote:
        "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey",
    },
    {
      quote:
        "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "Pablo Picasso",
    },
    {
      quote:
        "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus",
    },
    {
      quote:
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou",
    },
    {
      quote: "Either you run the day, or the day runs you.",
      author: "Jim Rohn",
    },
    {
      quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
    },
    {
      quote:
        "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain",
    },
    {
      quote:
        "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra",
    },
    {
      quote:
        "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
      author: "Zig Ziglar",
    },
    {
      quote: "Life shrinks or expands in proportion to one’s courage.",
      author: "Anais Nin",
    },
    {
      quote:
        "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
      author: "Vincent Van Gogh",
    },
    {
      quote:
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      author: "Aristotle",
    },
    {
      quote:
        "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "Jesus",
    },
    {
      quote:
        "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Go confidently in the direction of your dreams.  Live the life you have imagined.",
      author: "Henry David Thoreau",
    },
    {
      quote:
        "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
      author: "Erma Bombeck",
    },
    {
      quote:
        "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
      author: "Booker T. Washington",
    },
    {
      quote:
        "Certain things catch your eye, but pursue only those that capture the heart.",
      author: " Ancient Indian Proverb",
    },
    {
      quote: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      quote:
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "Plato",
    },
    {
      quote:
        "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
      author: "Maimonides",
    },
    {
      quote: "Start where you are. Use what you have.  Do what you can.",
      author: "Arthur Ashe",
    },
    {
      quote:
        "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      author: "John Lennon",
    },
    {
      quote: "Fall seven times and stand up eight.",
      author: "Japanese Proverb",
    },
    {
      quote:
        "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
      author: "Helen Keller",
    },
    {
      quote: "Everything has beauty, but not everyone can see.",
      author: "Confucius",
    },
    {
      quote:
        "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      author: "Anne Frank",
    },
    {
      quote: "When I let go of what I am, I become what I might be.",
      author: "Lao Tzu",
    },
    {
      quote:
        "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "Maya Angelou",
    },
    {
      quote:
        "Happiness is not something readymade.  It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      quote:
        "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      author: "Sheryl Sandberg",
    },
    {
      quote:
        "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
      author: "Aristotle",
    },
    {
      quote: "If the wind will not serve, take to the oars.",
      author: "Latin Proverb",
    },
    {
      quote:
        "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
      author: "Unknown",
    },
    {
      quote:
        "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      author: "Marie Curie",
    },
    {
      quote:
        "Too many of us are not living our dreams because we are living our fears.",
      author: "Les Brown",
    },
    {
      quote:
        "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine",
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington",
    },
    {
      quote:
        "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      author: "Leonardo da Vinci",
    },
    {
      quote:
        "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
      author: "Jamie Paolinetti",
    },
    {
      quote:
        "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
      author: "Erica Jong",
    },
    {
      quote:
        "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
      author: "Bob Dylan",
    },
    {
      quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "In order to succeed, your desire for success should be greater than your fear of failure.",
      author: "Bill Cosby",
    },
    {
      quote: "A person who never made a mistake never tried anything new.",
      author: " Albert Einstein",
    },
    {
      quote:
        "The person who says it cannot be done should not interrupt the person who is doing it.",
      author: "Chinese Proverb",
    },
    {
      quote: "There are no traffic jams along the extra mile.",
      author: "Roger Staubach",
    },
    {
      quote: "It is never too late to be what you might have been.",
      author: "George Eliot",
    },
    {
      quote: "You become what you believe.",
      author: "Oprah Winfrey",
    },
    {
      quote: "I would rather die of passion than of boredom.",
      author: "Vincent van Gogh",
    },
    {
      quote:
        "A truly rich man is one whose children run into his arms when his hands are empty.",
      author: "Unknown",
    },
    {
      quote:
        "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "Ann Landers",
    },
    {
      quote:
        "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
      author: "Abigail Van Buren",
    },
    {
      quote:
        "Build your own dreams, or someone else will hire you to build theirs.",
      author: "Farrah Gray",
    },
    {
      quote:
        "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
      author: "Jesse Owens",
    },
    {
      quote: "Education costs money.  But then so does ignorance.",
      author: "Sir Claus Moser",
    },
    {
      quote:
        "I have learned over the years that when one’s mind is made up, this diminishes fear.",
      author: "Rosa Parks",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote:
        "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "Oprah Winfrey",
    },
    {
      quote:
        "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      author: "Dalai Lama",
    },
    {
      quote:
        "You can’t use up creativity.  The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      quote:
        "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Do what you can, where you are, with what you have.",
      author: "Teddy Roosevelt",
    },
    {
      quote:
        "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "Tony Robbins",
    },
    {
      quote: "Dreaming, after all, is a form of planning.",
      author: "Gloria Steinem",
    },
    {
      quote:
        "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "Mae Jemison",
    },
    {
      quote:
        "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "Beverly Sills",
    },
    {
      quote: "Remember no one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Life is what we make it, always has been, always will be.",
      author: "Grandma Moses",
    },
    {
      quote:
        "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "Ayn Rand",
    },
    {
      quote:
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      quote:
        "It’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      quote:
        "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin",
    },
    {
      quote: "Nothing is impossible, the word itself says, “I’m possible!”",
      author: "–Audrey Hepburn",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "If you can dream it, you can achieve it.",
      author: "Zig Ziglar",
    },
  ];

const $cards = document.getElementById("cards");
const $stories = document.getElementById("stories");























function render(user, gif) {
  $stories.innerHTML += `<div class="user-highlight">
<img loading="lazy"
  src="${user.picture.thumbnail}"
  alt="imagen" class="user-image" />
<span class="user-text">${user.name.first}${user.name.last}</span>
</div>`;
  $cards.innerHTML += `<div class="card">
<header class="card-header">
  <div class="card-user-container">


    <img class="card-user-image" loading="lazy"
      src="${user.picture.thumbnail}"  />


    <!-- tooltip-box -->
    <div class="card-tooltip-box-container">

      <div class="tooltip-profile-info-container">
        <div class="toolttip-profile-image-container">
          <img
            src="${user.picture.thumbnail}"
            alt="user" class="tooltip-profile-image">
        </div>
        <div class="tooltip-text-container">


          <div class="tooltip-split-container1">
            <h3 class="tooltip-profile-text">${user.name.first} ${
    user.name.last
  }</h3>
            <span class="tooltip-profile-sub-text">${user.name.first}</span>
          </div>
          <div class="tooltip-split-container2">
            <a href="" class="tooltip-profile-link">${user.email}</a><br>
            <span class="tooltip-profile-followers">Raimundo Rincon sigue a esta cuenta</span>
          </div>

        </div>


      </div>
      <div class="tooltip-profile-stats">
        <div class="tooltip-posts-stat stat">
          <span class="tooltip-post-number number">${Math.round(
            Math.random() * 300
          )}</span>
          <span class="tooltip-post-text text">Publicaciones</span>
        </div>
        <div class="tooltip-followers-stat stat">
          <span class="tooltip-post-number number">${Math.round(
            Math.random() * 500
          )}</span>
          <span class="tooltip-post-text text">Seguidores</span>
        </div>
        <div class="tooltip-following-stat stat">
          <span class="tooltip-post-number number">${Math.round(
            Math.random() * 1000
          )}</span>
          <span class="tooltip-post-text text">Seguidos</span>
        </div>
      </div>
      <div class="tooltip-profile-images-container">
        <img src="${gif.images.downsized_large.url}" alt="1"
          class="tooltip-profile-image-post">
        <img src="https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif" alt="2"
          class="tooltip-profile-image-post">
        <img src="${user.picture.thumbnail}" alt="3"
          class="tooltip-profile-image-post">
      </div>
      <div class="tooltip-profile-buttons">
        <button class="tooltip-profile-button">Enviar Mensaje</button>
        <button class="tooltip-profile-button">Siguiendo</button>
      </div>


    </div>



    <div class="card-user-text-container">
      <span class="card-user-text">${user.name.first}${user.name.last}</span>
      <span class="card-user-sub-text">${user.login.username}</span>
    </div>
  </div>
</header>

<div class="card-media-container">
  <img class="card-image" src="${gif.images.downsized_large.url}"
    alt="" />
  <!-- botones -->
  <div class="card-buttons-container">
    <!-- botones izquierda -->
    <div class="left-buttons-container">
      <span class="card-btn heart-btn">
        <svg aria-label="Me gusta" class="_ab6-" color="#262626" fill="#262626" height="24" role="img"
          viewBox="0 0 24 24" width="24">
          <path
            d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z">
          </path>
        </svg>
      </span>
      <span class="card-btn comment-btn">
        <svg aria-label="Comentar" class="_ab6-" color="#262626" fill="#262626" height="24" role="img"
          viewBox="0 0 24 24" width="24">
          <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
            stroke-linejoin="round" stroke-width="2">
          </path>
        </svg>
      </span>
      <span class="card-btn message-btn">
        <svg aria-label="Compartir publicación" class="_ab6-" color="#262626" fill="#262626" height="24"
          role="img" viewBox="0 0 24 24" width="24">
          <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218"
            y1="3" y2="10.083"></line>
          <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
            stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
        </svg>
      </span>
    </div>

    <!-- derecha boton de guardar -->
    <div class="right-button-container">
      <span class="card-btn save-btn"><svg aria-label="Guardar" class="_ab6-" color="#262626" fill="#262626"
          height="24" role="img" viewBox="0 0 24 24" width="24">
          <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
        </svg></span>
    </div>


  </div>




  <div class="likes-description-container">
    <span class="likes">14,979 Me gusta</span>
    <p class="description-text">
    ${user.name.first}${user.name.last} ${text[Math.round(
        Math.random() * text.length-1 )].quote}
    </p>

  </div>


  <!-- agregar comentario -->

  <div class="add-comment-container">

    <div class="left-commnet-container">
      <span class="card-btn emoji-btn"><svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626"
          height="24" role="img" viewBox="0 0 24 24" width="24">
          <path
            d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z">
          </path>
        </svg></span>
      <input type="text" class="comment-text" placeholder="Agrega un comentario...">
    </div>


    <span class="publish-btn">Publicar</span>
  </div>

</div>
</div>
`;
}

async function getUsers(qty) {
  $stories.innerHTML = "";
  const response = await fetch(`https://randomuser.me/api/?results=${qty}`);
  const users = await response.json();
  const responseGif = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=BXn0EqOSVpRG7SZsn2zv2feDSJ66TcpG&limit=50&rating=g`
  );
  const gifs = await responseGif.json();

  // console.log(gifs)
  for (let user in users.results) {
    render(users.results[user], gifs.data[Math.floor(Math.random() * 49)]);
  }
}

getUsers(8);
