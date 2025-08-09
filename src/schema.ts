import { Table } from "@andrewitsover/midnight";

export class Users extends Table {
  id = this.IntPrimary;
  name = this.Index(this.Text);
  isActive = true;
}

export class Forests extends Table {
  id =  this.IntPrimary;
  name = this.Text;
  size = this.Real;
  managedBy = this.References(Users, {
    notNull: false
  });
}
