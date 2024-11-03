{
  //access Modifires
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    public addDeposit(amount: number) {
      this._balance += amount;
    }
    public getBalance() {
      return this._balance;
    }
    getUser() {
      console.log(
        `Mr. ${this.name} your bank account No. ${this.id} and your balance is ${this._balance}`
      );
    }
  }
  class StudentAccount extends BankAccount {
    test(){
        this._balance = 0;
    }
  }

  const gorib = new BankAccount(11, "gorib", 20);
  //   gorib.balance=2323;
  gorib.getUser();
}
