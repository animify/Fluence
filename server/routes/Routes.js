import AuthRoutes from './AuthRoutes';

export default class Routes {
    constructor(core) {
        this.routes = {
            api: null,
            auth: null,
            endpoints: null
        };

        this._buildAuthRoutes(core);

        return this.routes;
    }

    _buildAuthRoutes(core) {
        this.routes.auth = new AuthRoutes(core);
    }
}
