import { memo } from 'react'

interface ItemProps {
    title: string;
    onAddItemToWishList: (item: string) => void;
}

function ItemComponent(props: ItemProps) {
    return (
        <li>{props.title}
            <button onClick={() => props.onAddItemToWishList(props.title)} >
                Add to wish list
            </button>
        </li>
    )
}

//memo vai impedir que o componente seja renderizado, ou seja, passar pelo processo
//de: criação de uma árvore virtual de elementos DOM, comparar uma com a outra e fazer as alterações; 
//caso o elemento não tenha tido suas propriedades alteradas.

//O memo faz uma comparação raza, ou seja, ele compara as propriedades para ver se seus
//valores foram ou não alterados. Caso a propriedade estiver sendo alterada em um nível mais profundo,
//como em espaço de memória, o memo não vai conseguir impedir que o componente seja renderizado
//novamente.

//um exemplo é a propriedade passada acima chamada onAddItemToWishList.
//Essa propriedade está recebendo uma função que tem como parâmetro uma variável que pode
//ser alterada de acordo com que o usuário digite algo no input. Todas as vezes que essa 
//propriedade é alterada a função vai ser chamada novamente, e então, ela vai ocupar um novo
//espaço na memória. Dessa forma, mesmo que o memo esteja por volta desse component(ItemComponent),
//o hook não vai conseguir detectar que não houve mudança nas propriedades(por conta da comparação raza),
//e o componente será renderizado novamente.

export const Item = memo(ItemComponent)