import axios from "axios"

export const getProjects = async () => {
    let response = await axios.get("https://api.github.com/users/cassandrabook/repos/");

    return response.data;
}