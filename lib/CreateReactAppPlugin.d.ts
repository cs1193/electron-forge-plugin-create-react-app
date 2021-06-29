import PluginBase from '@electron-forge/plugin-base';
export interface ICreateReactAppPlugin {
}
export default class CreateReactAppPlugin extends PluginBase<ICreateReactAppPlugin> {
    name: string;
    private static projectDir;
    private projectDir;
    private craDir;
    private definesData;
    constructor(opts: ICreateReactAppPlugin);
    exitHandler: (options: {
        cleanup?: boolean;
        exit?: boolean;
    }, err?: Error | undefined) => void;
    init: (dir: string) => void;
    setDirectories: (dir: string) => void;
    private runYarnBuildReactApp;
    buildReactApps: () => Promise<void>;
    createDefinesDataFile: () => Promise<void>;
    getHook(name: string): (() => Promise<void>) | null;
    startLogic(): Promise<false>;
    static readDefinesData(): any;
}
