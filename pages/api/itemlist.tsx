import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_ITEMS = gql`
    query Query {
        allFilms {
            films {
                title
                director
                releaseDate
                speciesConnection {
                    species {
                        name
                        classification
                        homeworld {
                            name
                        }
                    }
                } 
            }
        }
    }
`;

function ItemList() {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export default ItemList;