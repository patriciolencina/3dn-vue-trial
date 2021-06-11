import axios from 'axios'
const RestApi = process.env.VUE_APP_REST

export const actions = {
    async getJwtToken({ commit }, id_ck) {
        const { data } = await axios.get(RestApi + `/GetJwtToken?id=${id_ck.id}&ck=${id_ck.ck}`)
        commit('setJwtToken', data.data)
    },
}

export default actions
