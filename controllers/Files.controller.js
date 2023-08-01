const FilesRouter = require("express").Router();
const fs = require("fs/promises");

// HTTP REQUEST = GET , POST , PUT ,DELETE

async function creatFile(params) {
  try {
    const content = new Date().toString().replace(/[:.]/g, "-");
    const path = `./Files/${content}`;
    await fs.writeFile(path, content, (err) => {
      console.log("hey joyson");
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
      // file written successfully
    });
    return content;
  } catch (err) {
    console.error(err);
  }
}

FilesRouter.get("/createFile", async (request, response, next) => {
  console.log("REQUEST HIT");

  //   response.send(content);
  const content = await creatFile();
  console.log(content);
  response.status(200).json({
    message: "REQUEST HIT",
    content,
  });
});

module.exports = FilesRouter;
