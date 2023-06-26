export const ConvertLink = (text) => {
    const num_link = text.split('\\')[1];
    return `http://localhost:8086/uploads/${num_link}`;
}

export const ConvertDate = (string_date) => {
    const date_created_at = new Date(string_date);
    const month = date_created_at.getMonth() + 1;
    const createdAt = date_created_at.getFullYear() + "/" + month + "/" + date_created_at.getDate();
    return createdAt;
}

export const ConvertTime = (inputTime) => {
    const formattedTime = inputTime.slice(0, 5);
    return formattedTime;
}

export const typeArray = ["", "Chùa", "Biển", "Núi", "Rừng", "Resort", "Hang động", "Đảo", "Vùng quê", "Đô thị", "Nông trại", "Công viên", "Cắm trại"];

export const arrivalArray = ["", "08:30", "09:30", "10:30", "11:30", "12:30"];
