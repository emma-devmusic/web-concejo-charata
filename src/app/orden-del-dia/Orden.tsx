export interface OrderList {
    date: string;
    path: string;
    name: string;
}

export interface Order {
    id: number;
    month: string;
    ordersList: OrderList[]
}


export const Orden = ({id, month, ordersList}: Order) => {


    return (
        <div className="accordion-item">
            <h2 className="accordion-header " id={`heading${id}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                    Ordenes de {month}
                </button>
            </h2>
            <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading${id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-column align-items-start gap-2">
                    {
                        ordersList.map( e => <a href={`/ordenes/${e.path}.pdf`} target="_blank">{e.name} - {e.date}</a> )
                    }
                </div>
            </div>
        </div>
    );
};
