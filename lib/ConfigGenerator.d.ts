export default class ConfigGenerator<IConfigGenerator> {
    private config;
    constructor(config: IConfigGenerator);
    getModules(): any;
    toEnvironmentVariable(name: string): string;
}
