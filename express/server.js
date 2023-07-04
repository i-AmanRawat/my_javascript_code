const express = require("express");
const app = express();

function middleware(req, res, next) {
  console.log("inside middleware");
  next();
}
app.use(middleware);
app.use(express.json());

const ideas = {
  1: {
    id: 1,
    idea_name: "i don't have any fucking idea!",
    author_name: "aman rawat",
    idea_description: "ab kya description du bhai",
  },
};

/*
    Search all ideas
*/
function allIdeas(req, res) {
  res.status(200).json(ideas);
}

app.get("/ideaApp/ideas", allIdeas);

/*
create a new idea
*/
function createIdea(req, res) {
  const idea = req.body;
  let id = Object.keys(ideas).length + 1;
  idea["id"] = id;
  ideas[id] = idea;
  res.status(201).json(ideas[id]);
}

app.post("/ideaApp/ideas", createIdea);

/*
update an existing idea
*/
function updateIdea(req, res) {
  const ideaId = req.params.id;
  if (ideas[ideaId]) {
    ideas[ideaId] = req.body;
    res.status(200).json(ideas[ideaId]);
  } else {
    res.status(400).json({
      message: "invalid id, enter a valid id of idea to be updated",
    });
  }
}

app.put("/ideaApp/ideas/update/:id", updateIdea);

/*
listen to 8080 port 
*/
app.listen(8080, () => {
  console.log("server is running at 8080");
});
