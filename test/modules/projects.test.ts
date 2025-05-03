import { TestEnvironment } from 'test/helper/test-env';

//#region setup
let env: TestEnvironment;

beforeAll(async () => {
    env = new TestEnvironment();
    await env.setup();
})

afterEach(() => {
    env.teardown();
})
//#endregion

describe('GET projects', () => {
  it('lists all projects', async () => {
    await env.request()
        .get("/projects")
        .expect(200)
  });
});
