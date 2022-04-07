// Write your solution in this file!
const employee = {
    name: 'Cesar',
    address: 'Longmont'
}

function updateEmployeeWithKeyAndValue(employee, name, address) {
    const newAddress = {...employee};

    newAddress[name] = address;

    return newAddress;

    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,name, address) {
    
    employee[name] = address;

    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const cloneEmployee = {...employee};

    delete cloneEmployee.name;

    return cloneEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;

    return employee;
}