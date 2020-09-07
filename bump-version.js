/* eslint-disable @typescript-eslint/no-var-requires */
const semanticRelease = require('semantic-release');
const fs = require('fs');

const getNextVersion = () => {
  let result;

  try {
    result = semanticRelease({
      branches: [
        'stable',
        '+([0-9])?(.{+([0-9]),x}).x',
        {name: 'beta', prerelease: true},
        {name: 'alpha', prerelease: true}
      ],
      plugins: [
        '@semantic-release/commit-analyzer'
      ],
      dryRun: true
    });
  } catch (err) {
    console.error('Version analysis failed with %O', err);
  }

  return result;
};

const writeVersion = (filePath, version) => {
  if ((typeof filePath === 'string' && filePath !== '') &&
    (typeof version === 'string' && version !== '')
  ) {
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;

      let packageJsonObj = JSON.parse(data);
      packageJsonObj.version = version;
      packageJsonObj = JSON.stringify(packageJsonObj, null, '  ');

      fs.writeFile(filePath, packageJsonObj, (err) => {
        if (err) throw err;
      });
    });
  } else {
    throw new Error('Invalid file path or version.');
  }
};

const bumpVersion = () => {
  getNextVersion().then((result) => {
    if (result) {
      const version = result.nextRelease.version;

      console.info(`Next version: ${version}`);

      try {
        console.info('Write version to package.json');
        writeVersion('./package.json', version);

        process.env['NEXT_RELEASE_VERSION'] = version;
      } catch(err) {
        console.error('Writing version to package.json failed with %O', err)
      }
    } else {
      console.info('No changes for version bump.');
    }
  }).catch((err) => {
    console.error('Version bump failed with %O', err);
  });
};

bumpVersion();
