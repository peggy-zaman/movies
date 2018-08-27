import { IUser } from "../entities/interfaces/user";
import { Repository, EntityRepository } from "typeorm";
import { injectable } from "inversify";
import { User } from "../entities/schema/user";

@injectable()
@EntityRepository(User)
export class UserRepository extends Repository<IUser> {
    public async getUsers(): Promise<IUser[]> {
        return this.find({ relations: ["movies"] });
    }

    public async addUser(user:IUser):Promise<IUser>{
        return this.save(user);
    }
    public async deleteUser(user:IUser):Promise<IUser>{
        return this.remove(user);
    }
}