import { IUserService } from "../interfaces/user_service";
import { IUser } from "../../entities/interfaces/user";
import { UserRepository } from "../../repositories/user_repository";
import { injectable } from "inversify";
import { getCustomRepository } from "typeorm";

@injectable()
export class UserService implements IUserService {
    userRepository: UserRepository = getCustomRepository(UserRepository);
    getUsers(): Promise<IUser[]> {
        return this.userRepository.getUsers();
    }
    addUser(user: IUser): Promise<IUser> {
        return this.userRepository.addUser(user);
    }
    deleteUser(user: IUser) {
        return this.userRepository.deleteUser(user);
    }
}