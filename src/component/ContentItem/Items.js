import ContentItem from "./ContentItem";

function Items({items=[]}) {
    const renderItem = () =>{
        return items.map((item, index) => {
            return (
              <ContentItem key = {index} data = {item} />
              )
            }
         )
      }
    return (
    <>
    {renderItem()}
    </>
    );
  }
export default Items;