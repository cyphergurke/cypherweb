
import React from 'react'
import LegalDE from './legalDE';
import LegalEN from './legalEN';
import Link from 'next/link';

const LegalPage = ({ params }: { params: { locale: any } }) => {
    return (
        <div className="min-h-screen   w-2/3 mt-44 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto top-42">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Impressum:</h1>
                </div>
                <div className="flex flex-col pt-7  mb-24 text-center md:text-left lg:text-left ">
                    <p> Cypherweb Development</p>
                    <p>{process.env.NAME}</p>
                    <p>{process.env.ADDR_STREET}</p>
                    <p>{process.env.ADDR_ZIP_AND_CITY}</p>
                    <Link href={`tel:${process.env.PHONE_NUMBER}`} className="mt-5 text-violet-500">
                        {process.env.PHONE_NUMBER}
                    </Link>
                    <p>{process.env.EMAIL_ADDRESS}</p>
                    <br />
                    <p>Umsatzsteuer-Identifikationsnummer (USt-IdNr.): {process.env.UST_NR}</p>
                </div>
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Datenschutzerklärung </h1>
                </header>
            </div>
            {params.locale === "en" ? <LegalDE /> : <LegalEN />}
        </div>
    )
}

export default LegalPage
