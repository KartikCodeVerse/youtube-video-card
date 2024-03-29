const cardDataArray = [
  {
    title: "Chillstep Music for Programming / Cyber / Coding",
    cName: "Chill Music Lab",
    views: 1.3,
    monthsOld: 6,
    duration: 31.2,
    thumbnail:
      "https://i.ytimg.com/vi/M5QY2_8704o/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBxJVW43UmZQRFhzW2pJfynoU0LlQ",
  },
  {
    title: "Best Free AI Text To Animated Video Generator Tool",
    cName: "Rahat K",
    views: 2.5,
    monthsOld: 8,
    duration: 15.7,
    thumbnail:
      "https://i.ytimg.com/vi/9jWK9ZIN86Y/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC3Cnuk1R5RD0Yb8aV0jCYVZwOFEg",
  },
  {
    title: "Moebius' Space Adventure - 4K Ai Generated Video",
    cName: "Visual Ai",
    views: 3.8,
    monthsOld: 5,
    duration: 20.2,
    thumbnail:
      "https://i.ytimg.com/vi/1avIcDpWzqA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDTte4B5TOlHBuoZYEFn3fgM5tEYw",
  },

  {
    title: "SEO Checklist: How I Rank #1 in 24 Hours (FREE)",
    cName: "Julian Goldie SEO",
    views: 1.8,
    monthsOld: 2,
    duration: 13.05,
    thumbnail:
      "https://i.ytimg.com/vi/etBJlL82rT0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBLTc1yEvIS_JISqhfK7rhCjgFM9A",
  },
  {
    title:
      "Warren Buffet 8 Investment Rules - Warren Buffett Rules Of Investing",
    cName: "Motivation Eye",
    views: 16,
    monthsOld: 9,
    duration: 8.2,
    thumbnail:
      "https://i.ytimg.com/vi/HxmoGj5Mzjc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAh5n4aJP2amSzDWtfT8VpKK1GI4w",
  },
  {
    title:
      "ELON’s secret to learning 10x FASTER | 5 steps Elon use to learn things Faster | GIGL",
    cName: "GREAT IDEAS GREAT LIFE",
    views: 0.8,
    monthsOld: 3,
    duration: 12.55,
    thumbnail:
      "https://i.ytimg.com/vi/4eV-3OoNSZA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCP9MaZNQYvU5ZsYpIPRZDdCt0QRA",
  },
];

function createCard(data) {
  const cardHtml = `
   <div class="card">
   <div class="card_img">
   <img src=${data.thumbnail} alt="">
   <p class="card_duration">${data.duration}</p>
   </div >
   <div class="card_des">
       <h4>${data.title}</h4>
       <p class="cName">${data.cName}</p>
       <p>${data.views}M views - ${data.monthsOld} months ago</p>
       </div>
   </div>
`;
  return cardHtml;
}

// Function to render multiple cards
function renderMultipleCards(container, dataArray) {
  let cardsHTML = "";
  dataArray.forEach((data) => {
    cardsHTML += createCard(data);
  });
  container.innerHTML = cardsHTML;
}

// Get the container element
const cardContainer = document.querySelector(".container");

// Render multiple cards
renderMultipleCards(cardContainer, cardDataArray);
