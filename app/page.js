'use server'
import NavBar from "../components/NavBar";
import Animation from "../components/Animation";
import SearchBar from "../components/SearchBar";

export default  async function Home() {
 
  return (
    <main className="h-screen ">

      <NavBar />
      <div className="flex flex-col   justify-between items-center h-2/3  mt-16">

        {/* titles */}
        <div className="text-4xl font-medium text-center">
          <h1 className="pb-14">Salut, voici la Platform BI que tout le monde recherche</h1>
          <h1>Donner le lien de votre Entrepôt de Donne </h1>
        </div>

        {/* searchbar */}
        <SearchBar/>


        {/* animation bdd */}
        <Animation/>

      </div>

    </main>
  );
}
