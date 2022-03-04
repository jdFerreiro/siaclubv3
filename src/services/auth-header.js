export default function authHeader() {
    var token = localStorage.getItem("token");
    if (token) {
        return { Authorization: 'Bearer ' + token };
    } else {
        return {};
    }
}