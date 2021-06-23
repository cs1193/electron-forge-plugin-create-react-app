import PluginBase from '@electron-forge/plugin-base';
export interface ICreateReactAppPlugin {
}
export default class CreateReactAppPlugin extends PluginBase<ICreateReactAppPlugin> {
    name: string;
    constructor(opts: ICreateReactAppPlugin);
    init: (dir: string) => void;
    buildReactApp: () => Promise<void>;
    getHook(name: string): (() => Promise<void>) | null;
    startLogic(): Promise<false>;
}
