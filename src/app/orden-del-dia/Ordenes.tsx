import { ordenesMock } from "../mocks/ordenes";
import { Orden } from "./Orden";

export const Ordenes = () => {
    

    
    return (
        <div className="accordion" id="accordionExample">
            {
                ordenesMock.map( e => 
                    <Orden 
                        id={e.id}
                        month={e.month}
                        ordersList={e.ordersList}
                        key={e.id}
                    />
                )
            }
        </div>
    );
};
