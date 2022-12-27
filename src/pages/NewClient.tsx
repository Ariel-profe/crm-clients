import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import { Form as FormComponent } from "../components/client/Form";
import { Error } from "../components/ui/Error";
import { createClient } from '../data/clients';
import { IClient } from '../utils/clients';
import {clients} from '../../db.json';


export async function action({request}:any){

  const clientsMails = clients.map( client => client.email );
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  data.phone = Number(data.phone);

  const email = formData.get('email');

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  
    //Validation form
    const errors:any = [];

    if(Object.values(data).includes('')){
      errors.push('All fields are required')
    }
    
    if (!regex.test(email)) {
      errors.push('Invalid Email')
    }

    if(clientsMails.includes(data.email)){
      errors.push('This mail already exist')
    }
  //Return errors
  if(Object.keys(errors).length){
    return errors;
  }
  
  await createClient(data as IClient);

  return redirect('/');
};

const NewClient = () => {

  const navigate = useNavigate();

  const errors:any = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900 capitalize ">new client</h1>
      <p className="mt-3 capitalize">complete the form</p>

      <div className="flex justify-end">
        <button 
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1) }
        >
          go back
        </button>
      </div>

      <div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-10">

        {
          errors?.length && errors.map( (error:any, index:number) => (
            <Error key={index}>{error}</Error>
          ))
        }

        <Form
          method="post"
          noValidate
        >
          <FormComponent client={undefined}            
          />

          <input
            className="mt-5 w-full bg-blue-800 p-3 uppercase text-white font-bold text-lg"
            type="submit"
            value="register" 
            />
        </Form>
      </div>
    </>
  )
}

export default NewClient