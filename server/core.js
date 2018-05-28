import Middleware from './modules/middleware/Middleware';
import Validate from './modules/tools/Validate';
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

    init() {
        this._initializeDatabase();
        this._initializeMiddleware();
        this._initializeTools();
        this._initializeRoutes();
    }

    constructor() {
        this.db = null;
        this.middleware = null;
        this.routes = null;
        this.tools = {
            validate: null
        };

        this.init();
    }
}
