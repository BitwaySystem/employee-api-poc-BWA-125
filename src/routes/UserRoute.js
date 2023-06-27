const UserController = require("../controllers/UserCotroller");
const router = require("express").Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/", UserController.deleteUser);

module.exports = router;
