import { TestEnvironment } from "test/helper/test-env";

let env: TestEnvironment;

beforeAll(async () => {
    env = new TestEnvironment();
    await env.setup();
})

afterEach(() => {
    env.teardown();
})

describe("GET tasks", () => {
    it("lists all tasks", async () => {
        await env.request()
            .get("/tasks")
            .expect(200)
    })
})