import { getConnection, Repository, EntityRepository } from "typeorm";
import { Review } from "../entities/schema/review";
import { IReview } from "../entities/interfaces/review";
import { injectable } from "inversify";
import { Crew } from "../entities/schema/crew";
import { ICrew } from "../entities/interfaces/crew";
@injectable()
@EntityRepository(Crew)
export class CrewRepository extends Repository<ICrew>{
    public async getCrews(): Promise<ICrew[]> {
        // return this.createQueryBuilder("review")
        // .where("review.id = :id", { id: 4004 }).getMany();
        return this.find({ relations: ["movies"] });
    }

    public async addCrew(crew: ICrew): Promise<ICrew> {
        this.save(crew);
        return crew;
    }

    public async deleteCrew(crew: ICrew) {
        this.remove(crew);
    }
}
