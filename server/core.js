import Middleware from './modules/middleware/Middleware';
import Validate from './modules/tools/Validate';

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

    init() {
        this._initializeDatabase();
        this._initializeMiddleware();
        this._initializeTools();
    }

    constructor() {
        this.db = null;
        this.middleware = null;
        this.tools = {
            validate: null
        };

        this.init();
    }
}
