module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('checkins', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          as: 'student',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('checkins');
  },
};
