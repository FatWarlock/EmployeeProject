export class UI {
  constructor() {
    this.employeeList = document.getElementById("employees");
    this.updateEmployeeButton = document.getElementById("update");
    this.nameInput = document.getElementById("name");
    this.departmentInput = document.getElementById("department");
    this.salaryInput = document.getElementById("salary");
  }
  addAllEmployeesToUI(employees) {
    let result = "";
    employees.forEach((employee) => {
      result += `
        <tr>
          <td>${employee.name}</td>
          <td>${employee.department}</td>
          <td>${employee.salary}</td>
          <td>${employee.id}</td>
          <td><a href="#" id="update-employee" class="btn btn-danger">Update</a></td>
          <td><a href="#" id="delete-employee" class="btn btn-danger">Delete</a></td>
        </tr>
      `;
    });
    this.employeeList.innerHTML = result;
  }
  addEmployeeToUI(employee) {
    this.employeeList.innerHTML += `
      <tr>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id="update-employee" class="btn btn-danger">Update</a></td>
        <td><a href="#" id="delete-employee" class="btn btn-danger">Delete</a></td>
      </tr>
    `;
  }
  clearInputs() {
    this.nameInput.value = "";
    this.departmentInput.value = "";
    this.salaryInput.value = "";
  }
  deleteEmployeeFromUI(element) {
    element.remove();
  }
  toggleUpdateButton(target) {
    if (this.updateEmployeeButton.style.display === "none") {
      this.updateEmployeeButton.style.display = "block";
      this.addEmployeeInfoToInputs(target);
    } else {
      this.updateEmployeeButton.style.display = "none";
      this.clearInputs();
    }
  }
  addEmployeeInfoToInputs(target) {
    const children = target.children;
    this.nameInput.value = children[0].textContent;
    this.departmentInput.value = children[1].textContent;
    this.salaryInput.value = children[2].textContent;
  }
  updateEmployeeOnUI(employee, parent) {
    parent.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
      <td>${employee.id}</td>
      <td><a href="#" id="update-employee" class="btn btn-danger">Update</a></td>
      <td><a href="#" id="delete-employee" class="btn btn-danger">Delete</a></td>
    `;
    this.clearInputs();
  }
}
