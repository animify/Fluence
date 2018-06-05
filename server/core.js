import Middleware from './modules/middleware/Middleware';
import Validate from './modules/tools/Validate';
import Strategies from './modules/auth/Strategies';
import db from './modules/db/db';
import Routes from './Routes/Routes';
import { IdeaController } from './controllers';

export default class Core {
    initializeDatabase() {
        this.db = db;
    }

    initializeMiddleware() {
        this.middleware = new Middleware(this);
    }

    initializeTools() {
        this.tools.validate = new Validate();
    }

    initializeRoutes() {
        this.routes = new Routes(this);
    }

    initializeStrategies() {
        this.strategies = new Strategies(this);
    }

    initializeControllers() {
        this.controllers = {
            idea: IdeaController
        };
    }

    init() {
        this.initializeDatabase();
        this.initializeStrategies();
        this.initializeMiddleware();
        this.initializeControllers();
        this.initializeTools();
        this.initializeRoutes();
    }

    constructor() {
        this.db = null;
        this.strategies = null;
        this.middleware = null;
        this.routes = null;
        this.tools = {
            validate: null
        };
        this.controllers = null;

        this.init();
    }
}
