
export const CustomHeader = ({title, description}:Props) => {
  return (
    <div className="content-center">
        <h1>{title}</h1>
        <div>{description && <p data-testid="p-desc">{description}</p>}</div>
    </div>
  )
}

interface Props{
    title: string
    description?: string
}