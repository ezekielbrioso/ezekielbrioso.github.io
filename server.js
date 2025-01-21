const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// This section contains Film data
const films = [
    { id: 1, title: "Nausicaä of the Valley of the Wind", release_date: "1984", description: "A princess fights to prevent the destruction of her world by a toxic jungle and the war between humans and nature.", image_url:"nausicaa.png" },
    { id: 2, title: "Castle in the Sky", release_date: "1986", description: "A young boy and girl search for a legendary floating island, but are pursued by pirates and government agents determined to capture it.", image_url:"castle in the sky.png" },
    { id: 3, title: "Grave of the Fireflies", release_date: "1988", description: "A young boy and his little sister struggle to survive in Japan during World War II after their home is destroyed.", image_url:"grave of the fireflies.png" },
    { id: 4, title: "My Neighbor Totoro", release_date: "1988", description: "A heartwarming story of two girls who move to the countryside and discover a magical creature named Totoro.", image_url:"my neighbor totoro.png" },
    { id: 5, title: "Kiki's Delivery Service", release_date: "1989", description: "A young witch named Kiki starts her own delivery service, learning about independence, responsibility, and self-discovery along the way.", image_url:"kikis delivery service.png"},
    { id: 6, title: "Only Yesterday", release_date: "1991", description: "A 27-year-old woman reflects on her childhood while traveling to the countryside, leading to a journey of self-discovery.", image_url:"only yesterday.png" },
    { id: 7, title: "Porco Rosso", release_date: "1992", description: "Set in Italy during the 1930s, the film tells the story of a former World War I pilot who becomes a bounty hunter and is cursed with the appearance of a pig.", image_url:"porco rosso.png" },
    { id: 8, title: "Ocean Waves", release_date: "1993", description: "A high school student reflects on his past relationships with two classmates during a school trip to Hawaii.", image_url:"ocean waves.png" },
    { id: 9, title: "Pom Poko", release_date: "1994", description: "A group of shape-shifting raccoon dogs use their magical powers to protect their forest home from urban development.", image_url:"pom poko.png" },
    { id: 10, title: "Whisper of the Heart", release_date: "1995", description: "A young girl discovers her passion for writing and begins on a journey of self-discovery, guided by a mysterious antique cat figurine.", image_url:"whisper of the heart.png" },
    { id: 11, title: "Princess Mononoke", release_date: "1997", description: "A young man begins on a journey to understand and heal the conflict between humans and the spirits of the forest.", image_url:"princess mononoke.png" },
    { id: 12, title: "My Neighbors the Yamadas", release_date: "1999", description: "A comedic look at the everyday lives of the Yamada family, highlighting the humor and challenges of family life.", image_url:"my neighbors the yamadas.png" },
    { id: 13, title: "Spirited Away", release_date: "2001", description: "A young girl, Chihiro, becomes trapped in a mysterious world of spirits and gods and must find a way to save her parents.", image_url:"spirited away.png" },
    { id: 14, title: "The Cat Returns", release_date: "2002", description: "A young girl is whisked away to the Cat Kingdom after saving a cat from an accident, only to be pursued by feline royalty who want her to marry their prince.", image_url:"the cat returns.png" },
    { id: 15, title: "Howl's Moving Castle", release_date: "2004", description: "A young woman is cursed by a witch and transformed into an elderly woman, seeking refuge in a magical, moving castle owned by the mysterious wizard Howl.", image_url:"howl's moving castle.png" },
    { id: 16, title: "Tales from Earthsea", release_date: "2006", description: "A young prince begins on a journey to uncover the truth about his cursed bloodline while trying to stop a world-ending event.", image_url:"tales from earthsea.png" },
    { id: 17, title: "Ponyo", release_date: "2008", description: "A young boy befriends a goldfish who turns into a girl, leading to a series of magical events that threaten to reshape the world.", image_url:"ponyo.png" },
    { id: 18, title: "The Secret World of Arrietty", release_date: "2010", description: "In a hidden world beneath the floorboards, tiny people known as Borrowers live secretly among humans. Arrietty befriends a boy and faces the dangers of being discovered.", image_url:"the secret world of arrietty.png" },
    { id: 19, title: "From Up on Poppy Hill", release_date: "2011", description: "A young girl and a boy try to save their school clubhouse from being demolished while uncovering the history of their parents.", image_url:"from up on poppy hill.png" },
    { id: 20, title: "The Wind Rises", release_date: "2013", description: "A biographical film about the life of Jiro Horikoshi, the designer of the Mitsubishi A6M Zero fighter plane used in World War II.", image_url:"the wind rises.png" },
    { id: 21, title: "The Tale of the Princess Kaguya", release_date: "2013", description: "A bamboo cutter finds a tiny girl inside a bamboo stalk and raises her as his daughter, unaware of her divine origins.", image_url:"the tale of the princess kaguya.png" },
    { id: 22, title: "When Marnie Was There", release_date: "2014", description: "A lonely girl forms a bond with Marnie, a mysterious girl who may not be what she seems, in a haunting story of friendship and secrets.", image_url:"when marnie was there.png" },
    { id: 23, title: "Earwig and the Witch", release_date: "2020", description: "A headstrong orphan girl is adopted by a selfish witch and must use her cleverness to escape the witch's control and uncover secrets about her origins.", image_url:"earwig and the witch.png" },
    { id: 24, title: "The Boy and the Heron", release_date: "2022", description: "A young boy begins on a surreal adventure following the death of his mother, guided by a mysterious heron that leads him through a fantastical journey filled with myth, magic, and self-discovery.", image_url:"the boy and the heron.png" }
];
  

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    console.log(`Searching for: ${query}`);  // Logs the query
    const results = films.filter(film => film.title.toLowerCase().includes(query));
    console.log(`Found results: ${results.length}`);  // Shows how many results were found
    res.json(results);
});

res.json(results);
});

// Starts the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
