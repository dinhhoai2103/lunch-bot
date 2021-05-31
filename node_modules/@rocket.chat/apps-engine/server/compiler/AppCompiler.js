"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCompiler = void 0;
const path = require("path");
const vm = require("vm");
const App_1 = require("../../definition/App");
const metadata_1 = require("../../definition/metadata");
const accessors_1 = require("../accessors");
const errors_1 = require("../errors");
const logging_1 = require("../logging");
const Utilities_1 = require("../misc/Utilities");
const ProxiedApp_1 = require("../ProxiedApp");
class AppCompiler {
    normalizeStorageFiles(files) {
        const result = {};
        Object.entries(files).forEach(([name, content]) => {
            result[name.replace(/\$/g, '.')] = content;
        });
        return result;
    }
    toSandBox(manager, storage) {
        const files = this.normalizeStorageFiles(storage.compiled);
        if (typeof files[path.normalize(storage.info.classFile)] === 'undefined') {
            throw new Error(`Invalid App package for "${storage.info.name}". ` +
                `Could not find the classFile (${storage.info.classFile}) file.`);
        }
        const customRequire = Utilities_1.Utilities.buildCustomRequire(files, storage.info.id);
        const context = vm.createContext({ require: customRequire, exports, process: {}, console });
        const script = new vm.Script(files[path.normalize(storage.info.classFile)]);
        const result = script.runInContext(context);
        if (typeof result !== 'function') {
            // tslint:disable-next-line:max-line-length
            throw new Error(`The App's main class for ${storage.info.name} is not valid ("${storage.info.classFile}").`);
        }
        const appAccessors = new accessors_1.AppAccessors(manager, storage.info.id);
        const logger = new logging_1.AppConsole(metadata_1.AppMethod._CONSTRUCTOR);
        const rl = vm.runInNewContext('new App(info, rcLogger, appAccessors);', vm.createContext({
            rcLogger: logger,
            info: storage.info,
            App: result,
            process: {},
            appAccessors,
        }), { timeout: 1000, filename: `App_${storage.info.nameSlug}.js` });
        if (!(rl instanceof App_1.App)) {
            throw new errors_1.MustExtendAppError();
        }
        if (typeof rl.getName !== 'function') {
            throw new errors_1.MustContainFunctionError(storage.info.classFile, 'getName');
        }
        if (typeof rl.getNameSlug !== 'function') {
            throw new errors_1.MustContainFunctionError(storage.info.classFile, 'getNameSlug');
        }
        if (typeof rl.getVersion !== 'function') {
            throw new errors_1.MustContainFunctionError(storage.info.classFile, 'getVersion');
        }
        if (typeof rl.getID !== 'function') {
            throw new errors_1.MustContainFunctionError(storage.info.classFile, 'getID');
        }
        if (typeof rl.getDescription !== 'function') {
            throw new errors_1.MustContainFunctionError(storage.info.classFile, 'getDescription');
        }
        if (typeof rl.getRequiredApiVersion !== 'function') {
            throw new errors_1.MustContainFunctionError(storage.info.classFile, 'getRequiredApiVersion');
        }
        const app = new ProxiedApp_1.ProxiedApp(manager, storage, rl, customRequire);
        manager.getLogStorage().storeEntries(app.getID(), logger);
        return app;
    }
}
exports.AppCompiler = AppCompiler;

//# sourceMappingURL=AppCompiler.js.map
