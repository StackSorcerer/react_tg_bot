import "./Practice.css"
import { Button } from 'primereact/button';
import React, { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


// export default function Practice() {
//     const [loading, setLoading] = useState(false);

//     const load = () => {
//         setLoading(true);

//         setTimeout(() => {
//             setLoading(false);
//         }, 2000);
//     };

//     return (
//         <div className="card flex flex-wrap justify-content-center gap-3">
//             <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
//         </div>
//     )
// }



const columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Имя' },
    { field: 'pain', header: 'Коэффициент боли' },
    { field: 'difficulty', header: 'Коэффициент сложности' },
    { field: 'chaos', header: 'Коэффициент хаоса' },
    { field: 'beaty', header: 'Коэффициент красоты кода' },
]

const data = [
    {
        id: 1,
        name: 'Vue',
        pain: 0.3,
        difficulty: 0.6,
        chaos: 0.3,
        beaty: 0.7,
    },
    {
        id: 2,
        name: 'React',
        pain: 0.7,
        difficulty: 0.3,
        chaos: 1.0,
        beaty: 0.3,
    },
    {
        id: 3,
        name: 'Angular',
        pain: 1.0,
        difficulty: 0.5,
        chaos: 0.1,
        beaty: 0.05,
    },
    {
        id: 4,
        name: 'Django',
        pain: 0.4,
        difficulty: 0.5,
        chaos: 0.6,
        beaty: 0.2,
    },
    {
        id: 4,
        name: 'Node.js',
        pain: 1.0,
        difficulty: 1.0,
        chaos: 1.0,
        beaty: 0.0,
    },
    {
        id: 5,
        name: 'FastAPI',
        pain: 0.1,
        difficulty: 0.2,
        chaos: 0.2,
        beaty: 0.5,
    }
]

export default function Practice() {
    return (
        <div className="card flex-wrap: wrap; ">
            <DataTable value={data}>
                {columns.map((col) => {
                    return <Column key={col.field} field={col.field} header={col.header} />
                })
                }
            </DataTable>
        </div>
    );
}

