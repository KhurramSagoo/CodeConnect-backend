import express from "express";
import { upload } from "../middlewares/multerMiddlewares.js";
import {
  createPost,
  deletePost,
  fetchAllPosts,
  fetchPostByUsername,
  updatePost,
  updatePostImage,
} from "../controllers/postController.js";
import { isUserAuthenticated } from "../middlewares/authentiucate.js";
const Router = express.Router();

Router.use(isUserAuthenticated);

Router.get("/fetch-postBy/:username", fetchPostByUsername);
Router.get("/fetch-all-post", fetchAllPosts);
Router.post(
  "/create-post",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  createPost
);
Router.patch("/update-post/:id", updatePost);
Router.patch(
  "/post-image-update/:id",
  upload.single("coverimage"),
  updatePostImage
);
Router.delete("/delete-post/:id", deletePost);
export default Router;
