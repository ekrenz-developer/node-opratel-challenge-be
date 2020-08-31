import Service from "./Service";
import User from "../models/User";

class UserService extends Service {
  constructor() {
    super(User);
  }
};

export default UserService;