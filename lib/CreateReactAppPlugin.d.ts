import PluginBase from '@electron-forge/plugin-base';
export interface ICreateReactAppPlugin {
}
export default class CreateReactAppPlugin extends PluginBase<ICreateReactAppPlugin> {
    name: string;
    private projectDir;
    constructor(opts: ICreateReactAppPlugin);
    exitHandler: (options: {
        cleanup?: boolean;
        exit?: boolean;
    }, err?: Error | undefined) => void;
    init: (dir: string) => void;
    setDirectories: (dir: string) => void;
    buildReactApp: () => Promise<void>;
    getHook(name: string): (() => Promise<void>) | null;
    startLogic(): Promise<false>;
}
