import { interfaces, controller, httpGet, httpPost, response, requestBody } from "inversify-express-utils";
import { TYPES } from "../constants/types";
import * as express from 'Express';
import { IUserService } from "../services/interfaces/user_service";
import { inject } from "inversify";
import { UserService } from "../services/implementations/user_service";
import { User } from "../entities/schema/user";

@controller("/api/v1/user")
export class UserController implements interfaces.Controller {
    private userService: IUserService;
    constructor(@inject(TYPES.UserService) userService: IUserService) {
        this.userService = userService;
    }

    @httpGet("/")
    public async get(@response() res: express.Response) {
        try {
            return await this.userService.getUsers();
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }

    }

    @httpPost("/")
    public async add(@response() res: express.Response, @requestBody() newUser: User) {
        try {
            const user = Object.create(User.prototype);
            Object.assign(user, newUser, {});
            return await this.userService.addUser(user);
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }
}