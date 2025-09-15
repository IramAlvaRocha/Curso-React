import { useParams } from "react-router"

export const HeroPage = () => {

  const { slugId = ''} = useParams();

  console.log({slugId});
  
  return (
    <div>HeroPage</div>
  )
}
