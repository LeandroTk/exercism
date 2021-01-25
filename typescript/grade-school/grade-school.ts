export default class GradeSchool {
  private studentsByGrade: Map<string, string[]> = new Map();
  private gradeByStudent: Map<string, string>= new Map();

  studentRoster() {
    return this.deepCopy(this.studentsByGrade);
  }

  addStudent(name: string, grade: number) {
    const gradeString = grade.toString();
    
    if (this.gradeByStudent.has(name)) {
      const illegalStudentGrade = this.gradeByStudent.get(name) || '';
      const students = this.getStudentsByGrade(illegalStudentGrade);
      const legalStudents = students.filter((student) => student !== name);
      this.studentsByGrade.set(illegalStudentGrade, legalStudents);
      return;
    }

    const studentsByGrade = this.getStudentsByGrade(gradeString);
    const students = this.studentsByGrade.has(gradeString) ? [...studentsByGrade, name].sort() : [name];
    this.studentsByGrade.set(gradeString, students);
    this.gradeByStudent.set(name, gradeString);
  }

  studentsInGrade(grade: number) {
    const gradeString = grade.toString();
    return [...this.getStudentsByGrade(gradeString)];
  }

  private getStudentsByGrade(grade: string) {
    return this.studentsByGrade.get(grade) || [];
  }

  private deepCopy(map: Map<string, string[]>) {
    return new Map(
      JSON.parse(
        JSON.stringify(
          Array.from(map)
        )
      )
    );
  }
}