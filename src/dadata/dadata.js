
const Dadata = {

    org:  (query) => {
        const tex = query.replace(/['"«»]/g, '');
        const xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', false)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.setRequestHeader('Authorization', 'Token cf6212cbb0fcc735492add9ca259e00e9ae8df2e')
        xhr.send('{"query": "' + query + '"}')
        const res = JSON.parse(xhr.responseText)
        const sug = res.suggestions

        let data = {}
        let container = {}


        sug.forEach(function(el){

            let adress = el.data.address ? el.data.address.unrestricted_value : el.data.address ? el.data.address.data.unrestricted_value : ''
            let str = el.value.replace(/['"«»]/g, '')
                + ', ИНН ' + el.data.inn
                + ', ОГРН ' + el.data.ogrn
                + ', ' + adress
            data[str] = null
            container[el.data.inn] = el


        })

        return { data: data, container: container }
    }
}



   export default Dadata