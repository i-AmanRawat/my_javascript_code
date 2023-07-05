const express = require("express");
const app = express();

function middleware(req, res, next) {
  console.log("inside middleware");
  next();
}
app.use(middleware);
app.use(express.json());

const ideas = [
  {
    id: 1,
    idea_name: "i don't have any fucking idea!",
    author_name: "aman rawat",
    idea_description: "ab kya description du bhai",
  },
];

/*
    Search all ideas
*/
function allIdeas(req, res) {
  res.status(200).json(ideas);
}

app.get("/ideaApp/ideas/all", allIdeas);

/*
create a new idea
*/
function createIdea(req, res) {
  const idea = req.body;
  let id = Object.keys(ideas).length + 1;
  idea["id"] = id;
  ideas.push(idea);
  res.status(201).json(ideas[id - 1]);
}

app.post("/ideaApp/ideas/newIdea", createIdea);

/*
update an existing idea
*/
function updateIdea(req, res) {
  const ideaId = req.params.id;
  const ideaIndex = ideaId - 1;
  if (ideas[ideaIndex]) {
    ideas[ideaIndex] = req.body;
    res.status(200).json(ideas[ideaIndex]);
  } else {
    res.status(400).json({
      message: "invalid id, enter a valid id of idea to be updated",
    });
  }
}

app.put("/ideaApp/ideas/update/:id", updateIdea);

/*
delete an idea from ideas
*/
function deleteIdea(req, res) {
  const deleteId = Number(req.params.id);
  const deleteIndex = deleteId - 1;

  if (ideas.length >= deleteId) {
    ideas.splice(deleteIndex, 1);
    res.status(200).json({
      message: `successfully deleted idea with id: ${deleteId}`,
    });
  } else {
    res.status(400).json({
      message: `invalid id, no idea available with id: ${deleteId}`,
    });
  }
}

app.delete("/ideaApp/ideas/delete/:id", deleteIdea);
/*
listen to 8080 port 
*/
app.listen(8080, () => {
  console.log("server is running at 8080");
});

