import React from 'react';
import { Link } from 'react-router-dom';

import {
    Toast,
    ToastHeader,
    ToastBody,

} from 'reactstrap';

const NotFound = () => {
    return (
        <>
            <div className="d-flex  p-2 bg-danger my-2  justify-content-center">
                <Toast >
                    <ToastHeader>
                        Pagina não encontrada!
                </ToastHeader>
                    <ToastBody >
                        <Link to='/' ><span className="text-danger">Retornar para o inicio!</span></Link>
                    </ToastBody>
                </Toast>
            </div>
        </>
    );
}
export default NotFound;