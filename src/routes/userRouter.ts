import { Application } from "express";
import UserController from '../controllers/UserController';

function userRouter(server: Application) {
  server.get(
    "/api/v1/users/:_id",
    UserController.get
  );
  server.get(
    "/api/v1/users",
    UserController.getAll
  );
  server.post(
    "/api/v1/users",
    UserController.insert
  );
  server.put(
    "/api/v1/users/:_id",
    UserController.update
  );
  server.delete(
    "/api/v1/users/:_id",
    UserController.delete
  )
}

export default userRouter;