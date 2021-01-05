type Array2D = number[][];

class Matrix {
  rows: Array2D;
  columns: Array2D;

  constructor(matrix: string) {
    this.rows = this.stringToMatrix(matrix);
    this.columns = this.rowsToColumns();
  }

  private stringToMatrix(matrix: string) {
    return matrix
      .split('\n')
      .map(this.rowToNumbers);
  }

  private rowToNumbers(row: string) {
    return row
      .split(' ')
      .map(Number);
  }

  private rowsToColumns() {
    return this.rows
      .map((_, columnIndex) =>
        this.rows.map((row) => row[columnIndex]))
  }
}

export default Matrix
