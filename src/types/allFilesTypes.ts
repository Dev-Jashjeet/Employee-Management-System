export default interface adminType {
    id: number,
    email: string,
    password: string
}

export interface taskType {
    active: boolean,
    newTask: boolean,
    completed: boolean,
    failed: boolean,
    taskTitle: string,
    taskDescription: string,
    taskDate: string,
    category: string
}

export interface employeeType {
    id: number,
    firstName: string,
    email: string,
    password: string,
    taskCounts: {
        active: number,
        newTask: number,
        completed: number,
        failed: number
    },
    tasks: taskType[]
}

export interface getLocalStorageType {
    employees: employeeType[],
    admin: adminType[]
}

export interface loggedInUserType {
    role: string,
    data: employeeType
}