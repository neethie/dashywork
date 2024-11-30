import request from "supertest";
import server from "../../server";

describe("POST /api/employees", () => {
    it("Should create a new employee", async () => {
        const response = await request(server).post("/api/employees").send({
            name: "test",
            email: "test.com",
        });
        expect(response.status).toBe(201);
    });
});
