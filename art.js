import 'dotenv/config';
import { Octokit } from '@octokit/rest';
import { pickArt } from './src/art/pickArt.js';
import { centerArt } from './src/art/centerArt.js';

const {
    GH_TOKEN: github_token,
    ART_GIST_ID: gist_id
} = process.env;

const octokit = new Octokit({
    auth: `token ${github_token}`
});

async function main() {
    if (!gist_id) {
        console.error('ART_GIST_ID is not set.');
        return;
    }

    const picked = pickArt();
    if (!picked) {
        console.error('No art pieces found in the art/ directory.');
        return;
    }

    console.log(`Selected art: ${picked.filename}`);
    await updateGist(centerArt(picked.art));
}

async function updateGist(content) {
    let gist;
    try {
        gist = await octokit.gists.get({ gist_id });
    } catch (error) {
        console.error(`Error fetching Gist: ${error}`);
        return;
    }

    const filename = Object.keys(gist.data.files)[0];

    try {
        await octokit.gists.update({
            gist_id,
            files: {
                [filename]: {
                    filename: `art.txt`,
                    content
                }
            }
        });
        console.log('Art gist updated.');
    } catch (error) {
        console.error(`Error updating Gist: ${error}`);
    }
}

main();
