import PluginBase from '@electron-forge/plugin-base';
export interface ICreateReactAppPlugin {
}
export default class CreateReactAppPlugin extends PluginBase<ICreateReactAppPlugin> {
    name: string;
    private projectDir;
    private _configGenerator;
    private loggers;
    private loggerPort;
    constructor(opts: ICreateReactAppPlugin);
    get configGenerator(): any;
    exitHandler: (options: {
        cleanup?: boolean;
        exit?: boolean;
    }, err?: Error | undefined) => void;
    init: (dir: string) => void;
    setDirectories: (dir: string) => void;
    private runYarnBuildReactApp;
    buildReactApps: () => Promise<void>;
    getHook(name: string): (() => Promise<void>) | null;
    startLogic(): Promise<false>;
    toEnvironmentVariable(name: string): string;
}
