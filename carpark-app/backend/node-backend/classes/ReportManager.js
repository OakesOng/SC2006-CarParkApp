const sql = require('mssql');

class ReportManager {
  static counter = 1; // Initialize a static counter

  constructor(userDatabaseConfiguration) {
    this.reportid = ReportManager.counter++; // Assign the current value of the counter and then increment it
    this.details = "";
    this.problem = "";
    this.userDatabaseConfiguration = userDatabaseConfiguration;
  }

  setDetails(details) {
    this.details = details;
  }

  setProblem(problem) {
    this.problem = problem;
  }

  getReportID() {
    return this.reportid;
  }

  getDetails() {
    return this.details;
  }

  getProblem() {
    return this.problem;
  }

  async getLastReportID() {
    const pool = new sql.ConnectionPool(this.userDatabaseConfiguration);
    try {

      
      await pool.connect();
      const request = new sql.Request(pool);
      const query = "SELECT MAX(reportid) AS lastReportID FROM userreport";
      const result = await request.query(query);

      const lastReportID = result.recordset[0].lastReportID || 0;
      return lastReportID + 1;
    } catch (err) {
      throw err;
    } finally {
      sql.close();
    }
  }

  async makeReport() {

    const pool = new sql.ConnectionPool(this.userDatabaseConfiguration);
    try {
      await pool.connect();
      const request = new sql.Request(pool);

      const nextReportID = await this.getLastReportID();

      request.input('nextReportID', sql.Int, nextReportID);
      request.input('details', sql.NVarChar, this.getDetails());
      request.input('problem', sql.NVarChar, this.getProblem());

      const sqlQuery = "INSERT INTO userreport (reportid, details, problem) VALUES (@nextReportID, @details, @problem)";
      await request.query(sqlQuery);

      console.log("1 record inserted with reportid: " + nextReportID);
    } catch (err) {
      console.error(err);
    } finally {
      sql.close();
    }
  }
}

module.exports = ReportManager;
