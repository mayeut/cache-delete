import * as core from "@actions/core";
import * as cache from "@actions/cache";

async function run(): Promise<void> {
  try {
    const cacheKey: string = core.getInput("cache_key");
    core.info(`Will delete ${cacheKey} from the BuildJet Cache`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    await cache.deleteCache([cacheKey]);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
