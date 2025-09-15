import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search your favorite superheroes"
        description="Discover, explore, and manage your favorite superheroes and villains!"
      />

      <CustomBreadcrumbs
        currentPage="Search for superheroes"
        breadcrumbs={
          [
            { label: "Home", to: "/" },
            { label: "Home", to: "/" },
            { label: "Home", to: "/" },
          ]
        }
      />

      <HeroStats />

      <SearchControls />
    </>
  );
};

export default SearchPage;
