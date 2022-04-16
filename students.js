const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
      SELECT students.id as student_id, students.name as name, cohorts.name as cohort
      FROM students
      JOIN cohorts ON cohorts.id = cohort_id
      WHERE cohorts.name LIKE '%${process.argv[2]}%'
      LIMIT ${process.argv[3] || 5};
    `)
  .then(result => {
    console.log(result.rows);
  })
  .catch(err => console.error('query error', err.stack));