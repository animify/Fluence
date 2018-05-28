import Middleware from './modules/middleware/Middleware';
import Validate from './modules/tools/Validate';
import Strategies from './modules/auth/Strategies';
import Db from './modules/db/db';
import Routes from './Routes/Routes';

export default class Core {
    _initializeDatabase() {
        this.db = null;
    }

    _initializeMiddleware() {
        this.middleware = new Middleware(this);
    }

    _initializeTools() {
        this.tools.validate = new Validate();
    }

    _initializeRoutes() {
        this.routes = new Routes(this);
    }

    _initializeStrategies() {
        this.strategies = new Strategies(this);
    }

    init() {
        this._initializeDatabase();
        this._initializeStrategies();
        this._initializeMiddleware();
        this._initializeTools();
        this._initializeRoutes();
    }

    constructor() {
        this.db = null;
        this.strategies = null;
        this.middleware = null;
        this.routes = null;
        this.tools = {
            validate: null
        };

        this.init();
    }
}
