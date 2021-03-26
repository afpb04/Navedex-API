import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateNaversProjects1616635550721
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'navers_projects',
        columns: [
          {
            name: 'navers_id',
            type: 'varchar',
          },
          {
            name: 'projects_id',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_navers',
            referencedTableName: 'navers',
            referencedColumnNames: ['id'],
            columnNames: ['navers_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_projects',
            referencedTableName: 'projects',
            referencedColumnNames: ['id'],
            columnNames: ['projects_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('navers_projects');
  }
}
