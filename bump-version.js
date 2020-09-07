/* eslint-disable @typescript-eslint/no-var-requires */
const semanticRelease = require('semantic-release');

async function init() {
  try {
    const result = await semanticRelease({
      branches: [
        'stable',
        '+([0-9])?(.{+([0-9]),x}).x',
        {name: 'beta', prerelease: true},
        {name: 'alpha', prerelease: true}
      ],
      plugins: [
        '@semantic-release/commit-analyzer',
        // ['@semantic-release/npm', {
        //   npmPublish: false
        // }]
      ],
      dryRun: true
    });

    if (result) {
      console.log(`Bumped to version ${result.nextRelease.version}.`);
    } else {
      console.log('No changes for version bump.');
    }
  } catch (err) {
    console.error('Version bump failed with %O', err)
  }
}

init();
