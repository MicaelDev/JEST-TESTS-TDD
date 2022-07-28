import exp from "constants";
import { User, UserInstance } from "../models/User";
import * as UserService from "./UserService";

describe("Testing user service", () => {
  let email = "test@jest.com";
  let password = "1234";

  beforeAll(async () => {
    await User.sync({ force: true });
  });

  test("Should create a new user", async () => {
    const newUser = (await UserService.createUser(
      email,
      password
    )) as UserInstance;
    expect(newUser).not.toBeInstanceOf(Error);
    expect(newUser).toHaveProperty("id");
    expect(newUser.email).toBe(email);
  });

  test("Should not allow to create a user with existing email", async () => {
    const newUser = await UserService.createUser(email, password);
    expect(newUser).toBeInstanceOf(Error);
  });

  test("Should find a user by the email", async () => {
    const user = (await UserService.findByEmail(email)) as UserInstance;
    expect(user.email).toBe(email);
  });

  test("Should match the password from database", async () => {
    const user = (await UserService.findByEmail(email)) as UserInstance;
    const match = UserService.matchPassword(password, user.password);
    expect(match).toBeTruthy();
  });

  test("Should not match the password from database", async () => {
    const user = (await UserService.findByEmail(email)) as UserInstance;
    const match = UserService.matchPassword("invalid", user.password);
    expect(match).toBeFalsy();
  });

  test("Should get a list of users", async () => {
    const users = await UserService.listAll();
    expect(users.length).toBeGreaterThanOrEqual(1);
    for(let i in users){
        expect(users[i]).toBeInstanceOf(User);
    }
  });
});
