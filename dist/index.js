"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const bodyParser = require("body-parser");
const cors = require("cors");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_config_1 = require("./inversify.config");
class Server {
    static bootstrap() {
        return __awaiter(this, void 0, void 0, function* () {
            const container = new inversify_1.Container();
            yield container.loadAsync(inversify_config_1.bindings);
            this.server = new inversify_express_utils_1.InversifyExpressServer(container);
            this.server.setConfig((app) => {
                app.use(cors({
                    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Access-Control-Allow-Headers", "Accept", "X-Access-Token", "X-Requested-With", "Access-Control-Request-Headers", "Authorization",],
                    credentials: true,
                    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
                    origin: '*',
                    preflightContinue: false
                }));
                // Disable default cache
                app.set("etag", false);
                // add body parser
                app.use(bodyParser.urlencoded({
                    extended: true
                }));
                app.use(bodyParser.json());
            });
            this.app = this.server.build();
            this.app.listen(process.env.APP_PORT || 3000, () => {
            });
        });
    }
}
exports.server = Server.bootstrap();
//# sourceMappingURL=index.js.map