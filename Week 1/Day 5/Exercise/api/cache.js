function createCache(){
    const cache = new Map()
    console.log(cache)

    return{
        get(key){
            return cache.get(key)
        },
        set(key,value){
            cache.set(key,value)
        },
        clear(){
            cache.clear()
        }
    }
}

export default createCache