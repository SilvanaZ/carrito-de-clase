console.log('Conection sucess!')
const getCarrito = async() =>{
    try{
        const response = await fetch('api/cart/show')
        const result = await response.json()

        console.log(result);
    
    }catch (error){
        
    }
}