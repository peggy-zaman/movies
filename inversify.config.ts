import { AsyncContainerModule } from 'inversify';
import {interfaces as inversifyInterfaces} from 'inversify-express-utils'
import { TYPES } from './src/constants/types';
import { getDbConnection } from './db';
import { IMovieService } from './src/services/interfaces/movie_service';
import { MovieService } from './src/services/implementations/movie_service';
import { MovieController } from './src/controllers/movie_controller';

export const bindings = new AsyncContainerModule(async (bind) => {

    await getDbConnection();
    bind<inversifyInterfaces.Controller>(TYPES.Controller).to(MovieController).whenTargetNamed("MovieController")
    bind<IMovieService>(TYPES.MovieService).to(MovieService);

});
