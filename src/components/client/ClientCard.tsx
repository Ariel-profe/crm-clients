import {FC} from 'react';
import { Form, useNavigate, redirect } from 'react-router-dom';
import { deleteClient } from '../../data/clients';
import { IClient } from '../../utils/clients';

interface Props{
    client: IClient;
};

export async function action({params}:any){

    await deleteClient(params.id);

    return redirect('/');

};

export const ClientCard:FC<Props> = ({client}) => {

    const navigate = useNavigate();
    const {name, company, email, phone, id} = client;

  return (
    <tr className='border-b'>
        <td className='p-6 space-y-2'>
            <p className='text-2xl text-gray-800'>{name}</p>
            <p>{company}</p>
        </td>

        <td className="p-6">
            <p className="text-gray-600"><span className='text-gray-800 uppercase font-bold mr-1'>Email:</span>{email} </p>
            <p className="text-gray-600"><span className='text-gray-800 uppercase font-bold mr-1'>Phone:</span>{phone} </p>
        </td>

        <td className='p-6 flex gap-3 '>
            <button 
                className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs "
                onClick={() => navigate(`/clients/${client.id}/edit`)}
            >
                edit
            </button>

           <Form
            method='post'
            action={`/clients/${id}/delete`}
            onSubmit={(e)=> {
                if(!confirm('Are you sure you want to remove it?')){
                    e.preventDefault()
                }
            }}
           >
                <button
                    type='submit' 
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs "
                >
                    delete
                </button>
           </Form>
        </td>
    </tr>
  )
}
