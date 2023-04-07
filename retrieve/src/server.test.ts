import supertest from "supertest";
import app from "./app"
import {prismaMock} from "./lib/prisma/client.mock";

const request = supertest(app);

test("TEST /planets", async () => {
    const planets = [
        {
            "id": 1,
            "name": "Mercury",
            "description": null,
            "diameter": 1234,
            "moons": 12,
            "createdat": "2023-03-31T15:07:20.581Z",
            "updatedat": "2023-03-31T15:06:29.231Z"
        },
        {
            "id": 2,
            "name": "Venus",
            "description": null,
            "diameter": 4321,
            "moons": 8,
            "createdat": "2023-03-31T15:07:49.707Z",
            "updatedat": "2023-03-31T15:07:36.199Z"
        }
    ]
   
    //@ts-ignore 
    prismaMock.planet.findMany.mockResolvedValue(planets);
    
    const response = await request
    .get ("/planets")
    .expect (200)
    .expect ("Content-Type", /application\/json/)
    expect(response.body).toEqual(planets)
})