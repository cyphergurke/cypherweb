
import React from 'react'
import LegalDE from './legalDE';
import LegalEN from './legalEN';

const page = ({ params }: { params: any }) => {
    const pathname = params.locale;



    return (
        <main className="relative dark:bg-black-100 bg-slate-300 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
            {pathname.includes("en") ? <LegalDE /> : <LegalEN />}
        </main>
    )

}

export default page
