import AuthRoutes from './AuthRoutes';
import ApiRoutes from './ApiRoutes';

export default class Routes {
    constructor(core) {
        this.routes = {
            api: null,
            auth: null,
            endpoints: null
        };

        this._buildAuthRoutes(core);
        this._buildApiRoutes();

        return this.routes;
    }

    _buildAuthRoutes(core) {
        this.routes.auth = new AuthRoutes(core);
    }

    _buildApiRoutes() {
        this.routes.api = new ApiRoutes();
    }
}
