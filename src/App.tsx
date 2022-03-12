import { useState, useMemo, useCallback } from "react";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([])
  const [wishList, setWishList] = useState<string[]>([])

  const [newItem, setNewItem] = useState('')

  function addItemToList() {
    setItems([...items, `Item ${items.length}`])
  }

  //todas as vezes que o item for alterado a função addItemToWishList vai ser
  //chamada novamente. Isso vale para qualquer função que receber, nesse caso, Item como parâmetro
  //para evitar esse comportamento vale usar o hook useCallbak.
  //useCallback vai fazer com que uma função(ou variável) fique gravada em um espaço na memória
  //para que, uma vez tendo a suas propriedades alteradas, a função não passe a ocupar um novo
  //espaço na memória. Dessa forma a função não vai ser chamada quando não for necessário
  const addItemToWishList = useCallback((item: string) => {
    //state representa o valor anterior do wishList
    //setWishList vai receber os valores antigos de wishList, espalha-los no array
    //e enviar o novo valor recebido
    setWishList(state => [...state, item])
  }, [])

  //os calculos somente irão ser refeitos caso o valor
  //da variável que o useMemo está recebendo como dependência seja alterado.
  const countItemWithOne = useMemo(() => {
    console.log('test')

    return items.filter(item => item.includes('1')).length

  }, [items])


  return (
    <div>
      <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={addItemToList} >Add</button>
      <ul>
          {items.map(item => {
            return <Item key={item} title={item} onAddItemToWishList={addItemToWishList} />
          })}
      </ul>
      <div>
          Contagem de 1: {countItemWithOne}
      </div>
    </div>
  );
}

export default App;
