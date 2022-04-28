import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById";

import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher"


export const HeroList = ({ publisher }) => {
    const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if(!hero){
    return <Navigate to='/' />
  }

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes(publisher) ){
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    const heroes = getHeroesByPublisher(publisher)
    return (
       
            <ul>
                {
                    heroes.map( hero => (
                        <li key={ hero.id }>
                            { hero.superhero }
                        </li>
                    ))
                }
            </ul>
        
    )
} 