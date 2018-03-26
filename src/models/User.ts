class User {
  private id: number;
  private username: string;

  constructor(id: number, username: string) {
    this.id = id;
    this.username = username;
  }

  getID(): number {
    return this.id;
  }

  getUsername(): string {
    return this.username;
  }
}

export default User;