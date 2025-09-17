import { useMemo } from "react";
import { useSearchParams } from "react-router";

import { Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";


export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab])


  const { data: heroesResponse } = usePaginatedHero(+page, +limit)
  const { data: summary } = useHeroSummary()
   
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron 
          title="The Superhero Universe!"
          description="Discover, explore, and manage your favorite superheroes and villains!"
        />

        <CustomBreadcrumbs currentPage="Super Heroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() => setSearchParams(prev => {
                prev.set('tab', 'all');
                return prev;
              })} >
              All Characters ({ summary?.totalHeroes })
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              onClick={() => setSearchParams(prev => {
                prev.set('tab', 'favorites');
                return prev;
              })}
              className="flex items-center gap-2"
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger value="heroes" onClick={() => setSearchParams(prev => {
              prev.set('tab', 'heroes');
              return prev;
            })} >
              Heroes ({ summary?.heroCount })
            </TabsTrigger>

            <TabsTrigger
              value="villains"
              onClick={() => setSearchParams(prev => {
                prev.set('tab', 'villains');
                return prev;
              })} >
              Villains ({ summary?.villainCount })
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Show all the characters */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>All Favorites</h1>
            {/* Show all favorite characters */}
            {/* <HeroGrid /> */}
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes</h1>
            {/* Show all heroes */}
            {/* <HeroGrid /> */}
          </TabsContent>
          <TabsContent value="villains">
            {/* Show all villains */}
            <h1>Villains</h1>
            {/* <HeroGrid /> */}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1 } />
      </>
    </>
  );
};
