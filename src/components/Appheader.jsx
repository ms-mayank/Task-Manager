import Button from './Button'
const Appheader = ({title, onAdd, showAdd}) => {
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'red':'green'} text={showAdd?'close':'add'} onClick={onAdd}/>
    </header>
  )
}

export default Appheader