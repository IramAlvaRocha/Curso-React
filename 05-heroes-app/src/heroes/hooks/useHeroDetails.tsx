import { useQuery } from "@tanstack/react-query"
import { getHeroAction } from "../actions/get-hero.action"

export const useHeroDetails = (idSlug: string) => {

    return useQuery({
    queryKey: ["heroes", idSlug],
    queryFn: () => getHeroAction(idSlug),
    retry: false
  })
   
}
