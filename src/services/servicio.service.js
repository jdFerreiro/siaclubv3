import api from "./api";
import authHeader from "./auth-header";

class servicioService {
    async getAll() 
    {
        return await api.get('siaclub/servicio', {
            headers: authHeader()
        }).then(result => {
            return result.data;
        }).catch(error => {
            throw error
        });
    }
    async getById(id) 
    {
        var apiRoute = 'siaclub/servicio/' + id;
        const response = await api.get(apiRoute, {
            headers: authHeader()
        });
        return response.data;
    }
    async create(description) 
    {
        var serviceObj = {
            descripcion: description
        };
        return await api.post('siaclub/servicio/create', serviceObj, {
            headers: authHeader()
        }).then(response => {
            return response.data;
        });    
    }
    async update(data) 
    {
        var serviceObj = {
            id: data.IdServicio,
            descripcion: data.Descripcion,
            idEstadoServicio: data.IdEstadoServicio
        };
        
        return await api.patch('siaclub/servicio/update', serviceObj, {
            headers: authHeader()
        }).then(response => {
            return response.data;
        });    
    }
    async delete(id) 
    {
        var apiRoute = 'siaclub/servicio/delete/' + id;
        const response = await api.delete(apiRoute, {
            headers: authHeader()
        });
        return response.data;
    }
}

export default new servicioService();