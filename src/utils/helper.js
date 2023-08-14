const HTTPFetch = () => { 
    const customeFecth = async(url, Options =   {}) => { 
        const defaultMethod = "GET"
        const defaultHeader = { 
            "Content-Type": "Application/json",
            Accept: "application/json"
        }
        const controller = new AbortController()
        Options.signal = controller.signal
        Options.method = Options.method || defaultMethod
        Options.header = Options.header ? {...defaultHeader, ...Options.header} : defaultHeader

        Options.body = JSON.stringify(Options.body) || false
        if (!Options.body) delete Options.body 

        try { 
            const response = await fetch(url, Options)
            return await response.json()
        } catch (err)  { 
            return err
        }
     }

     const get = (url, Options = {}) => customeFecth(url, Options)

     return { 
        get
     }
}

export default HTTPFetch
