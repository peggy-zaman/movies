import { ICrewService } from "../interfaces/crew_service";
import { injectable } from "inversify";
import { getCustomRepository } from "typeorm";
import { CrewRepository } from "../../repositories/crew_repository";
import { ICrew } from "../../entities/interfaces/crew";

@injectable()
export class CrewService implements ICrewService {
    crewRepository: CrewRepository = getCustomRepository(CrewRepository);
    getCrews(): Promise<ICrew[]> {
        return this.crewRepository.getCrews();
    }
    addCrews(crew: ICrew): Promise<ICrew> {
        return this.crewRepository.addCrew(crew);
    }
    deleteCrews(crew: ICrew) {
        this.crewRepository.deleteCrew(crew);
    }
}