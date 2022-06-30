export async function Sorteio(CAMINHO){
    const res = await fetch(CAMINHO)
    const data = await res.json()
    console.log(data)
    return await data
   }