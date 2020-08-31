import Controller from './Controller';
import UserService from "../services/UserService";
import Service from "../services/Service";

const userService = new UserService();

class UserController extends Controller {
  constructor(service: Service) {
    super(service);
  }
}

export default new UserController(userService);