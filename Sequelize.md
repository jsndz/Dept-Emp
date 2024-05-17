The sequelize-cli provides several commands to manage your Sequelize setup. Here are some of the most commonly used commands:

Initialize a new Sequelize project:

sh
Copy code
npx sequelize-cli init
This creates the folders config, models, migrations, and seeders in your project.

Generate a new model:

sh
Copy code
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
This creates a new model file in the models folder and a new migration file in the migrations folder.

Run migrations:

sh
Copy code
npx sequelize-cli db:migrate
This runs all pending migrations.

Undo the last migration:

sh
Copy code
npx sequelize-cli db:migrate:undo
This undoes the last migration that was run.

Undo all migrations:

sh
Copy code
npx sequelize-cli db:migrate:undo:all
This undoes all the migrations that have been run.

Generate a new seed file:

sh
Copy code
npx sequelize-cli seed:generate --name demo-user
This creates a new seed file in the seeders folder.

Run seeds:

sh
Copy code
npx sequelize-cli db:seed:all
This runs all seed files.

Undo the last seed:

sh
Copy code
npx sequelize-cli db:seed:undo
This undoes the last seed that was run.

Undo all seeds:

sh
Copy code
npx sequelize-cli db:seed:undo:all
This undoes all the seeds that have been run.

These commands help you manage your database schema and seed data effectively using Sequelize CLI.
