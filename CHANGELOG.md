# Changelog

# [2.1.0](https://github.com/hyperweavers/electron-sample-app/compare/v2.0.1...v2.1.0) (2020-09-07)


### Bug Fixes

* **release:** add dry run to bump version script ([a712a23](https://github.com/hyperweavers/electron-sample-app/commit/a712a2380d93a321e211bd64f338ff29b08d7a71))


### Features

* **release:** bump version with custom script to update package.json ([d0cdf96](https://github.com/hyperweavers/electron-sample-app/commit/d0cdf96ac093a8fedfc8d0976f724c13766f40ac))

## [1.9.2](https://github.com/hyperweavers/electron-sample-app/compare/v1.9.1...v1.9.2) (2020-08-31)


### Bug Fixes

* remove path from rexexp ([5d7c19e](https://github.com/hyperweavers/electron-sample-app/commit/5d7c19e45fa95648bf443bece9f26ac2139b4544))
* update path in rexexp ([1d811a7](https://github.com/hyperweavers/electron-sample-app/commit/1d811a7864bd6b982a4e4a4ac91376cefd2f4875))

## [1.9.1](https://github.com/hyperweavers/electron-sample-app/compare/v1.9.0...v1.9.1) (2020-08-31)


### Bug Fixes

* correct syntax error ([b277b35](https://github.com/hyperweavers/electron-sample-app/commit/b277b357fe3db5e863f032937eb5d379bd5ecd56))
* move artifacts to one place before upload ([11cbc2f](https://github.com/hyperweavers/electron-sample-app/commit/11cbc2fb9efc46cca73d1239983f01acd8ab5feb))
* update file extensions in regexp ([17df1a7](https://github.com/hyperweavers/electron-sample-app/commit/17df1a772d470586be4cee22d61c0fd027fbaf51))
* use regexp for copy artifacts under one directory ([11185c9](https://github.com/hyperweavers/electron-sample-app/commit/11185c9641311c3e0d21d67d040c6fdc8f9fc949))

# [1.9.0](https://github.com/hyperweavers/electron-sample-app/compare/v1.8.4...v1.9.0) (2020-08-31)


### Bug Fixes

* add input description for os in common action ([acf98c5](https://github.com/hyperweavers/electron-sample-app/commit/acf98c518809b7a0275ecafc37c343286a1eb18b))
* change common action directory strecture ([8274cb4](https://github.com/hyperweavers/electron-sample-app/commit/8274cb4f5500fa2b23e57bc6656a96fb1f30299e))
* change common action tag in ci ([8fcd015](https://github.com/hyperweavers/electron-sample-app/commit/8fcd01534cf136bdaf185cfd4e2eeb1b87d41e99))
* enclose os and node matrix with quote ([0b67fe5](https://github.com/hyperweavers/electron-sample-app/commit/0b67fe59c1f233c6a1184dffd9bfa7faece69e2d))
* move out checkout step from common ([76761ae](https://github.com/hyperweavers/electron-sample-app/commit/76761ae9c3048d8f82b54d182b2b7d2db210e4df))
* prefix 'action' to common step in ci ([7f395fa](https://github.com/hyperweavers/electron-sample-app/commit/7f395fafda2f307d1cf55d7bdaa42f3d4cc95b5c))
* prevent exit code 1 for shasum ([553385d](https://github.com/hyperweavers/electron-sample-app/commit/553385d9cee56acf9f6a2e4ae1a9783786d4ca33))
* print chechsum and signature in ci ([62b51a6](https://github.com/hyperweavers/electron-sample-app/commit/62b51a65f2d092eb95d043cda7a157df69e28b00))
* remove combined regexp for artifacts upload ([d14547f](https://github.com/hyperweavers/electron-sample-app/commit/d14547f9ae91aa7e62487a72afaefc9bf238fa22))
* rollback composite actions ([fbe4b09](https://github.com/hyperweavers/electron-sample-app/commit/fbe4b09257bab510eedb4f5bf0fe3615e37ac6fa))


### Features

* publish artifact checksums and use composite actions ([d1f57f6](https://github.com/hyperweavers/electron-sample-app/commit/d1f57f6e25e2bb73fa5c714414b178fb34d6690d))

## [1.8.4](https://github.com/hyperweavers/electron-sample-app/compare/v1.8.3...v1.8.4) (2020-08-30)


### Bug Fixes

* remove directory listing in ci ([b1979b2](https://github.com/hyperweavers/electron-sample-app/commit/b1979b2022530b5ad73c6f5106eabd6ca541b4cb))

## [1.8.3](https://github.com/hyperweavers/electron-sample-app/compare/v1.8.2...v1.8.3) (2020-08-30)


### Bug Fixes

* update assets path in semantic-release config ([01ba592](https://github.com/hyperweavers/electron-sample-app/commit/01ba592780a4c9eb37f4fe57dba3781620b68dee))

## [1.8.2](https://github.com/hyperweavers/electron-sample-app/compare/v1.8.1...v1.8.2) (2020-08-30)


### Bug Fixes

* update artifacts download path ([fa35b57](https://github.com/hyperweavers/electron-sample-app/commit/fa35b578722964b8159a6afecd515f9fee4b7d6f))

## [1.8.1](https://github.com/hyperweavers/electron-sample-app/compare/v1.8.0...v1.8.1) (2020-08-30)


### Bug Fixes

* add name to artifacts in ci ([09b92fd](https://github.com/hyperweavers/electron-sample-app/commit/09b92fdf9cdaf45b110d1e31ee7fa8d37f0d8171))

# [1.8.0](https://github.com/hyperweavers/electron-sample-app/compare/v1.7.1...v1.8.0) (2020-08-30)


### Bug Fixes

* add node modules for release job in ci ([ac67921](https://github.com/hyperweavers/electron-sample-app/commit/ac67921eb4093676ab7d2dc9526247a6cb351da7))
* checkout code for release job in ci ([2512424](https://github.com/hyperweavers/electron-sample-app/commit/25124248293b4fba63dbe2507a016e51cac29cfc))
* remove directory listing in ci ([e835848](https://github.com/hyperweavers/electron-sample-app/commit/e83584890711c85ce71442d5d69a59393088d30c))
* remove regexp in ci artifact upload ([38933cc](https://github.com/hyperweavers/electron-sample-app/commit/38933cce8545b6ed41a0e500e78064426bb177a0))
* update upload and download artifact paths in ci ([b796491](https://github.com/hyperweavers/electron-sample-app/commit/b796491855ff06ee0f4f6ad3d64fd9e860cea0c4))
* upload and download artifacts in ci ([bbcee13](https://github.com/hyperweavers/electron-sample-app/commit/bbcee13d16fc8b00a1a9b2df9b72a2810ed723b2))
* use ubuntu for release job in ci ([0803426](https://github.com/hyperweavers/electron-sample-app/commit/0803426140058273722c7cd2aae890ef62507690))
* verify artifact upload in ci ([783bfa1](https://github.com/hyperweavers/electron-sample-app/commit/783bfa1d182cb37f05f82ac428745d712c611c6f))


### Features

* enable release in ci ([8e1a94e](https://github.com/hyperweavers/electron-sample-app/commit/8e1a94e1253799d378516cb30f9971c67f9a3344))

## [1.7.1](https://github.com/hyperweavers/electron-sample-app/compare/v1.7.0...v1.7.1) (2020-08-30)


### Bug Fixes

* remove windows from ci build ([c21f287](https://github.com/hyperweavers/electron-sample-app/commit/c21f287788141df9b87d11b4fe49f08165ff0ea6))

# [1.7.0](https://github.com/hyperweavers/electron-sample-app/compare/v1.6.7...v1.7.0) (2020-08-30)


### Features

* add mac and windows targets to ci ([2c27aa2](https://github.com/hyperweavers/electron-sample-app/commit/2c27aa28733c0eb0cbefea73867014bb1929259e))

## [1.6.7](https://github.com/hyperweavers/electron-sample-app/compare/v1.6.6...v1.6.7) (2020-08-30)


### Bug Fixes

* add npm plugin to semantic-release config ([a5e83da](https://github.com/hyperweavers/electron-sample-app/commit/a5e83da93a311baab80ad07fa43fecfd0d9a573f))

## [1.6.6](https://github.com/hyperweavers/electron-sample-app/compare/v1.6.5...v1.6.6) (2020-08-30)


### Bug Fixes

* run ci after removing npm token secret ([466b8d5](https://github.com/hyperweavers/electron-sample-app/commit/466b8d5d7f475bc9cad304fadb6ed5e7bf101756))

## [1.6.5](https://github.com/hyperweavers/electron-sample-app/compare/v1.6.4...v1.6.5) (2020-08-30)


### Bug Fixes

* force commit signing in ci ([2069ef6](https://github.com/hyperweavers/electron-sample-app/commit/2069ef675322609a14f73f71551d7c94ef8b4044))

## [1.6.4](https://github.com/hyperweavers/electron-sample-app/compare/v1.6.3...v1.6.4) (2020-08-30)


### Bug Fixes

* remove additional commit signing config from ci ([fb0de72](https://github.com/hyperweavers/electron-sample-app/commit/fb0de720e6fefaa49b25176a33fc11bf740c1fe7))

## [1.6.3](https://github.com/hyperweavers/electron-sample-app/compare/v1.6.2...v1.6.3) (2020-08-30)


### Bug Fixes

* configure commit signing in ci ([db38d2e](https://github.com/hyperweavers/electron-sample-app/commit/db38d2ec4ec8e97267a29318a0b87621b0297278))

## [1.6.2](https://github.com/hyperweavers/electron-sample-app/compare/v1.6.1...v1.6.2) (2020-08-30)


### Bug Fixes

* use github actions token for ci ([9caba6b](https://github.com/hyperweavers/electron-sample-app/commit/9caba6bff41b8b61659c13f466805fda40b8423b))

## [1.6.1](https://github.com/hyperweavers/electron-sample-app/compare/v1.6.0...v1.6.1) (2020-08-30)


### Bug Fixes

* disable ci commit signing ([ab2b6b7](https://github.com/hyperweavers/electron-sample-app/commit/ab2b6b71940cb5b9819a0d108341e90fd85b56d0))

# [1.6.0](https://github.com/hyperweavers/electron-sample-app/compare/v1.5.0...v1.6.0) (2020-08-30)


### Bug Fixes

* remove npm plugin from semantic-release config ([6fb26e2](https://github.com/hyperweavers/electron-sample-app/commit/6fb26e2bd3889fab13a7f66543bb0d011ba45f8c))


### Features

* add commitizen ([c5d8e27](https://github.com/hyperweavers/electron-sample-app/commit/c5d8e279f6e26673c908738730afa3aa144426dc))

# [1.5.0](https://github.com/hyperweavers/electron-sample-app/compare/v1.4.2...v1.5.0) (2020-08-30)


### Features

* format package.json ([f8acd71](https://github.com/hyperweavers/electron-sample-app/commit/f8acd71130b54418c3b69829a3df5a226a9cff5c))


### Reverts

* fix: use github provided token instead of auto generated one ([62f61f2](https://github.com/hyperweavers/electron-sample-app/commit/62f61f231709844ad6dd20ddaf4cd20488261731))

## [1.4.2](https://github.com/hyperweavers/electron-sample-app/compare/v1.4.1...v1.4.2) (2020-08-30)


### Bug Fixes

* use github provided token instead of auto generated one ([a220dea](https://github.com/hyperweavers/electron-sample-app/commit/a220deaaf5b4b91bdac1dd8abf1c78bb6c197bc3))

## [1.4.1](https://github.com/hyperweavers/electron-sample-app/compare/v1.4.0...v1.4.1) (2020-08-29)


### Bug Fixes

* add author and committer environment variables to ci ([24469fa](https://github.com/hyperweavers/electron-sample-app/commit/24469fa5cb9b9b7a32bb1df3ba57c9fc18337fcb))

# [1.4.0](https://github.com/hyperweavers/electron-sample-app/compare/v1.3.0...v1.4.0) (2020-08-29)


### Bug Fixes

* change github token environment variable in ci ([83052b2](https://github.com/hyperweavers/electron-sample-app/commit/83052b223e8ae9f2e095ab78bb466a61635bb669))
* change log format issue ([bd03fc8](https://github.com/hyperweavers/electron-sample-app/commit/bd03fc85a4fd27ea607227f2c18936d300b6f4fb))


### Features

* add gpg key to ci ([fc41d80](https://github.com/hyperweavers/electron-sample-app/commit/fc41d80f63de9bed954abaf6f6e087bffd6560bc))
* update semantic-release config with pre-release branches and release assets ([4e4228a](https://github.com/hyperweavers/electron-sample-app/commit/4e4228a3a00dfdfaefb82d3810c92c87ea637ebd))

# [1.3.0](https://github.com/hyperweavers/electron-sample-app/compare/v1.2.0...v1.3.0) (2020-08-29)


### Features

* update release artifacts name in semantic-release config ([c9835dc](https://github.com/hyperweavers/electron-sample-app/commit/c9835dcd624716a682a28f0a949141988116701f))

# [1.2.0](https://github.com/hyperweavers/electron-sample-app/compare/v1.1.0...v1.2.0) (2020-08-29)


### Features

* rename homepage title ([e384b48](https://github.com/hyperweavers/electron-sample-app/commit/e384b48d36ba5c99dea2960d4832ec178514e855))

# [1.1.0](https://github.com/hyperweavers/electron-sample-app/compare/v1.0.0...v1.1.0) (2020-08-29)


### Features

* add change log ([f38aa62](https://github.com/hyperweavers/electron-sample-app/commit/f38aa62f35f517946cd0bf3a5f214e58013fbd24))
