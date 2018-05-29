import AuthRoutes from './AuthRoutes';
import ApiRoutes from './ApiRoutes';
import EndpointRoutes from './EndpointRoutes';

export default class Routes {
    constructor(core) {
        this.routes = {
            api: null,
            auth: null,
            endpoints: null
        };

        this._buildAuthRoutes(core);
        this._buildApiRoutes();
        this._buildEndpointRoutes(core);

        return this.routes;
    }

    _buildAuthRoutes(core) {
        this.routes.auth = new AuthRoutes(core);
    }

    _buildApiRoutes() {
        this.routes.api = new ApiRoutes();
    }

    _buildEndpointRoutes(core) {
        this.routes.endpoints = new EndpointRoutes(core);
    }
}
