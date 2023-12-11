import Image from "next/image";
import HeroImg from "../../public/assets/undraw_messages_re_qy9x.svg";
import { FaCheck } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen max-lg:flex-col justify-center items-center p-24 max-lg:p-6">
        <div>
          <h1 className="text-3xl text-left max-lg:text-center mb-3">
            Le meilleur moyen de prévenir vos clients
          </h1>
          <p className="text-xl text-left max-lg:text-center mb-3">
            Enregistrer un client, changer ça disponibilité <br></br>et le
            client est prévenu dans les plus bref délai.
          </p>
          <div className="flex gap-4 font-semibold text-lg max-md:justify-center max-md:mb-7">
            <button className="bg-indigo-500 px-4 py-2 rounded-lg shadow-lg shadow--300 text-white">
              Get started
            </button>
            <button className="px-4 py-2 border border-indigo-400 rounded-lg">
              plus d{"'"}infos
            </button>
          </div>
        </div>
        <div>
          <Image src={HeroImg} alt="hero image" width={750} height={540} />
        </div>
      </section>
      <section className="p-24 max-lg:p-6">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl text-center max-lg:text-center mb-20">
            Qu{"'"}est-ce que propose Avproduct ?
          </h1>

          <div className="flex gap-6">
            <div>
              <h2 className="text-2xl mb-8">Présentation</h2>
              <p>
                Avproduct est une application web facilitant la notification de
                la disponibilité des produits attendus par vos clients.
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-8">Fonctionnalites principales</h2>
              <p>
                Les clients enregistrés dans votre tableau de bord sont
                automatiquement informés par SMS dès que le produit souhaité
                devient disponible.<br></br>
                Vous avez la flexibilité de modifier la disponibilité d{"'"}un
                produit selon vos besoins.
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-8">Notification automatisee</h2>
              <p>
                Les clients, une fois enregistrés, bénéficient d{"'"}une
                notification automatique par SMS dès que le produit attendu est
                disponible.
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-8">Gestion disponibilité</h2>
              <p>
                En plus de la notification, l{"'"}application offre la
                possibilité de changer la disponibilité des produits en temps
                réel. De plus, vous pouvez spécifier la durée pendant laquelle
                le produit sera maintenu en attente pour le client.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-24 max-lg:p-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center max-lg:text-center mb-20">
            Tarification
          </h1>
          <div className="flex gap-10 ">
            <div className="p-8 border border-indigo-200 rounded-lg text-center">
              <h2 className="text-2xl mb-8">Plan de base</h2>
              <p className="mb-8">Prix: €20/mois</p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500"/> Notification automatique par SMS
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500"/> Enregistrement des clients
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500"/> Changement de disponibilité des produits
                </li>
              </ul>
              <div>
                <button className="bg-indigo-500 px-4 py-2 rounded-lg shadow-lg shadow--300 text-white mt-8 hover:bg-indigo-800">
                  Je prends cette offre
                </button>
              </div>
            </div>
            <div className="p-8 border border-indigo-200 rounded-lg text-center">
              <h2 className="text-2xl mb-8">Plan annuel</h2>
              <p className="mb-8">Prix: €200/an</p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500"/>2 mois offerts
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500"/>
                  Toutes les fonctionnalités du plan de base
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500"/>
                  Support 24/7
                </li>
              </ul>
              <div>
                <button className="bg-indigo-500 px-4 py-2 rounded-lg shadow-lg shadow--300 text-white mt-8 hover:bg-indigo-800">
                  Je prends cette offre
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
