import { useState } from "react"


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: ""
  })
  return (
    <div>CreatePage</div>
  )
}

export default CreatePage