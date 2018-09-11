import { IReview } from "../../entities/interfaces/review";
import { ReviewRepository } from "../../repositories/review_repository";
import { CrewRepository } from "../../repositories/crew_repository";
import { ICrew } from "../../entities/interfaces/crew";

export interface ICrewService {
    crewRepository: CrewRepository;
    getCrews(): Promise<ICrew[]>;
    addCrews(crew: ICrew): Promise<ICrew>;
    deleteCrews(crew: ICrew);

}