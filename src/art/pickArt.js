import { readdirSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ART_DIR = join(__dirname, '../../art');

// Day of the year (1-366) in UTC, so it lines up with the UTC cron schedule.
export const getDayOfYear = (date) => {
    const startOfYear = Date.UTC(date.getUTCFullYear(), 0, 0);
    const today = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    return Math.floor((today - startOfYear) / 86400000);
};

// Pick one .txt piece from art/, rotating deterministically by the day of the year.
export const pickArt = (date = new Date()) => {
    const files = readdirSync(ART_DIR)
        .filter((f) => f.endsWith('.txt'))
        .sort();

    if (files.length === 0) return null;

    const filename = files[getDayOfYear(date) % files.length];
    const art = readFileSync(join(ART_DIR, filename), 'utf8');

    return { filename, art };
};
