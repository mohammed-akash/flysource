import axios from "axios";

export const ApplyServiceApi = async (userData: { openModal: Boolean; service: any; }) => {
    const response = await axios.post(`/api/common/apply`, userData);
    return response.data;
};