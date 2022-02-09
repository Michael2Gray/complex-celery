# Complex Celery

![main workflow](https://github.com/Michael2Gray/complex-celery/actions/workflows/main.yml/badge.svg)

[![codecov](https://codecov.io/gh/Michael2Gray/complex-celery/branch/master/graph/badge.svg?token=LQJGGFQQX3)](https://codecov.io/gh/Michael2Gray/complex-celery)
[![Maintainability](https://api.codeclimate.com/v1/badges/07e9bdd66a91b1fe08ca/maintainability)](https://codeclimate.com/github/Michael2Gray/complex-celery/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/07e9bdd66a91b1fe08ca/test_coverage)](https://codeclimate.com/github/Michael2Gray/complex-celery/test_coverage)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Michael2Gray/complex-celery.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Michael2Gray/complex-celery/alerts/)
[![Known Vulnerabilities](https://snyk.io/test/github/Michael2Gray/complex-celery/badge.svg)](https://snyk.io/test/github/Michael2Gray/complex-celery)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Configuration

Project confguration can be set using environment variables or `.env` files as described in [vite documentation](https://vitejs.dev/guide/env-and-mode.html#env-files). The defaults are provided in [.env](./.env) file.

The recommended approach for changing config values during local development is to create a `.env.local` file at the root of the project. This file is in `.gitignore` so your local overrides won't be tracked in git.

Supported environment variables:

- `VITE_ENABLE_MOCK_SERVICE_WORKER` - when set to `true` enables [msw](https://mswjs.io/) mock service worker with handlers defined in [mocks folder](./src/mocks); if you want to use it instead of the real API, don't forget to change `VITE_API_BASE_URL` to `/mock-api`
- `VITE_REACT_QUERY_DEVTOOLS` - when set to `true` enables react-query devtools
- `VITE_API_BASE_URL` - base url of the api yet to be built; can be set to `/mock-api` to use the mocked version of the API (the same one that is used for tests)
