import { Table, Column, Model, DataType, Default } from "sequelize-typescript";

@Table({
    tableName: "employees",
})
class Employee extends Model {
    @Column({
        type: DataType.STRING(100),
    })
    declare name: string;

    @Column({
        type: DataType.STRING(100),
    })
    declare email: string;

    @Column({
        type: DataType.INTEGER,
    })
    declare age: number;

    @Column({
        type: DataType.INTEGER,
    })
    declare phone: string;

    @Column({
        type: DataType.STRING(100),
    })
    declare position: string;
}

export default Employee;
