import { initSeedDB } from '../database/seed/init.seed';
(async () => {
    try {
        await initSeedDB();
    } catch (error) {
        console.error(error);
    }
    process.exit(1);
})();
