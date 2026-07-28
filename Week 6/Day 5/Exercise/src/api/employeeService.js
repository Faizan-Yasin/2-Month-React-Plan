import employeeApi from "./employeeApi";

export const getEmployees = async () => {
    const response = await employeeApi.get("users");
    return response.data;
}

export const getEmployeeById = async (id) => {
    const response = await employeeApi.get(`users/${id}`);
    return response.data;
}