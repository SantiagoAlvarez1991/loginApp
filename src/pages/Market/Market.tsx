import { useLoaderData } from "react-router-dom"

const Market = () => {

    interface Products {
        id: number,
        title: string
        images: string[]
    }

    //type ProductsB = Pick<Products, 'id' | 'title'>[]    

    const  products  = useLoaderData() as Products[]
    console.log(products);
    

    return(
        <>
            <h1>Market</h1>
            <section>
                {products?.map(product => (
                    <article key={product.id}>
                        <img src={product.images[0]}/>
                        <p>{product.title}</p>
                    </article>
                ))}
                
            </section>
        </>

    )
}

export const productsLoader = async() => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
    try{
        return response.json()
    }
    catch{
        console.error();        
    }
}

export default Market