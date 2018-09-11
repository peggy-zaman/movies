import { AsyncContainerModule } from 'inversify';
import { interfaces as inversifyInterfaces } from 'inversify-express-utils'
import { TYPES } from './src/constants/types';
import { getDbConnection } from './db';
import { IMovieService } from './src/services/interfaces/movie_service';
import { MovieService } from './src/services/implementations/movie_service';
import { MovieController } from './src/controllers/movie_controller';
import { ReviewController } from './src/controllers/review_controller';
import { ReviewService } from './src/services/implementations/review_service';
import { IReviewService } from './src/services/interfaces/review_service';
import { UserController } from './src/controllers/user_controller';
import { UserService } from './src/services/implementations/user_service';
import { IUserService } from './src/services/interfaces/user_service';
import { GentreController } from './src/controllers/genre_controller';
import { IGenreService } from './src/services/interfaces/genre_service';
import { GenreService } from './src/services/implementations/genre_service';
import { CrewController } from './src/controllers/crew_controller';
import { ICrewService } from './src/services/interfaces/crew_service';
import { CrewService } from './src/services/implementations/crew_service';

export const bindings = new AsyncContainerModule(async (bind) => {

    await getDbConnection();
    bind<inversifyInterfaces.Controller>(TYPES.Controller).to(MovieController).whenTargetNamed("MovieController")
    bind<IMovieService>(TYPES.MovieService).to(MovieService);

    bind<inversifyInterfaces.Controller>(TYPES.Controller).to(ReviewController).whenTargetNamed("ReviewController")
    bind<IReviewService>(TYPES.ReviewService).to(ReviewService);

    bind<inversifyInterfaces.Controller>(TYPES.Controller).to(UserController).whenTargetNamed("UserController")
    bind<IUserService>(TYPES.UserService).to(UserService);

    bind<inversifyInterfaces.Controller>(TYPES.Controller).to(GentreController).whenTargetNamed("GenreController")
    bind<IGenreService>(TYPES.GenreService).to(GenreService);

    bind<inversifyInterfaces.Controller>(TYPES.Controller).to(CrewController).whenTargetNamed("CrewController")
    bind<ICrewService>(TYPES.CrewService).to(CrewService);

});
