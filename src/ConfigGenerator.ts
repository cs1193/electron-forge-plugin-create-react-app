type ReactAppModule = Record<string, string>

interface IConfigGenerator {
  modules: ReactAppModule[]
}

export default class ConfigGenerator<IConfigGenerator> {
  constructor(config: IConfigGenerator) {

  }
}
