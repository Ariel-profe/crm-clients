import { FC } from "react";
import { IClient } from "../../utils/clients";

interface Props{
    client: IClient | undefined;
}

export const Form:FC<Props> = ({client}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Name:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client Name"
                    name="name"
                    defaultValue={client?.name}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="company"
                >Company:</label>
                <input 
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client Company"
                    name="company"
                    defaultValue={client?.company}

                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client Email"
                    name="email"
                    defaultValue={client?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="phone"
                >Phone:</label>
                <input 
                    id="phone"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client Phone"
                    name="phone"
                    defaultValue={client?.phone}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notes"
                >Notes:</label>
                <textarea
                    id="notes"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Client Notes"
                    name="notes"
                    defaultValue={client?.notes}
                />
            </div>
        </>
    )
}