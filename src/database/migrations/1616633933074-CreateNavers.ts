import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateNavers1616633933074 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'navers',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'birthdate',
            type: 'date',
          },
          {
            name: 'admission_date',
            type: 'date',
          },
          {
            name: 'job_role',
            type: 'varchar',
          },
          {
            name: 'user_id',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('navers');
  }
}
