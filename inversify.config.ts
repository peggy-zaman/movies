import { AsyncContainerModule } from 'inversify';
import {interfaces as inversifyInterfaces} from 'inversify-express-utils'
import { TYPES } from './src/constants/types';
import { getDbConnection } from './db';
import { IMovieService } from './src/services/interfaces/movie_service';
import { MovieService } from './src/services/implementations/movie_service';
import { MovieController } from './src/controllers/movie_controller';
import { ReviewController } from './src/controllers/review_controller';
import { ReviewService } from './src/services/implementations/review_service';
import { IReviewService } from './src/services/interfaces/review_service';

export const bindings = new AsyncContainerModule(async (bind) => {

    await getDbConnection();
    bind<inversifyInterfaces.Controller>(TYPES.Controller).to(MovieController).whenTargetNamed("MovieController")
    bind<IMovieService>(TYPES.MovieService).to(MovieService);

    bind<inversifyInterfaces.Controller>(TYPES.Controller).to(ReviewController).whenTargetNamed("ReviewController")
    bind<IReviewService>(TYPES.ReviewService).to(ReviewService);

});
