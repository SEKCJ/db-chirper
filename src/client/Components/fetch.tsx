let setData = async (url: string, data: object, methodType: string) => {

    try {
        let response = await fetch(url, {
            method: methodType,
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        })

        return await response.text();
    } catch (err) {
        console.log(err);
    }
    
}

export default setData