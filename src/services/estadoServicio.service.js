import api from "./api";
import authHeader from "./auth-header";

class estadoservicioService {
    async getAll() 
    {
        return await api.get('administracion/estadoservicio', {
            headers: authHeader()
        }).then(result => {
            return result.data;
        }).catch(error => {
            throw error
        });
    }
    async getById(id) 
    {
        var apiRoute = 'administracion/estadoservicio/' + id;
        const response = await api.get(apiRoute, {
            headers: authHeader()
        });
        return response.data;
    }
    async create(description) 
    {
        var dataObj = {
            descripcion: description,
        };
        return await api.post('administracion/estadoservicio/create', dataObj, {
            headers: authHeader()
        }).then(response => {
            return response.data;
        });    
    }
    async update(data) 
    {
        var dataObj = {
            id: data.id,
            descripcion: data.description
        };
        return await api.patch('administracion/estadoservicio/update', dataObj, {
            headers: authHeader()
        }).then(response => {
            return response.data;
        });    
    }
    async delete(id) 
    {
        var apiRoute = 'administracion/estadoservicio/delete/' + id;
        const response = await api.delete(apiRoute, {
            headers: authHeader()
        });
        return response.data;
    }
}

export default new estadoservicioService();