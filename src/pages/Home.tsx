import { useLoaderData } from 'react-router-dom';
import { ClientCard } from '../components/client/ClientCard';
import { getClients } from '../data/clients';
import { IClient } from '../utils/clients';

export function loader(){
  const clients = getClients();
  
  return clients;
};


const Home = () => {

  const clients = useLoaderData() as IClient[] ;
  
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900 capitalize ">clients</h1>
      <p className="mt-3 capitalize">manage your clients</p>

      {
        clients.length ? (
          <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className='bg-blue-800 text-white'>
              <tr>
                <th className='p-2 capitalize'>client</th>
                <th className='p-2 capitalize'>contact</th>
                <th className='p-2 capitalize'>accions</th>
              </tr>
            </thead>
            <tbody>
              {
                 clients.map( (client:IClient) => (
                  <ClientCard
                    key={client.id} 
                    client={client}
                  />
                 ))
              }
            </tbody>
          </table>
        ) : (
          <p className='text-center mt-10'>no clients found</p>
        )
      }
    </>
  )
}

export default Home